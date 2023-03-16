const mongoose = require('mongoose');
const colors = require('colors');
const express = require('express');

const app = express();
app.use(express.json()); // Always load this middleware

mongoose
  .connect('mongodb://127.0.0.1:27017/task')
  .then(() => console.log('Database is connected!'))
  .catch((err) => console.log(err));

//Importing using vanilla javascript
const User = require('./model/User');
const Task = require('./model/Task');
const { findByIdAndUpdate } = require('./model/User');

const port = process.env.PORT || 4040;
app.listen(port, () => console.log(`Server is running at port ${port}`));

// /task POST method
app.post('/task', async (req, res) => {
  try {
    console.log(req.body);
    const task = new Task(req.body);
    console.log(task);
    await task.save();

    return res.status(201).json({ success: true, task });
  } catch (e) {
    return res.status(400).json({ success: false, message: e.message });
  }
});

// /user POST method
app.post('/user', async (req, res) => {
  try {
    console.log(req.body);
    const user = new User(req.body);
    console.log(user);
    await user.save();

    return res.status(201).json({ success: true, user });
  } catch (e) {
    return res.status(400).json({ success: false, message: e.message });
  }
});

// /task GET method
app.get('/task', async (req, res) => {
  try {
    console.log(req.body);
    const task = await Task.find();
    return res.json({ success: true, task });
  } catch (e) {
    return res.json({ success: false, message: e.message });
  }
});

// /user GET method
app.get('/user', async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.find();
    return res.json({ success: true, user });
  } catch (e) {
    return res.json({ success: false, message: e.message });
  }
});

// /task/:id GET method for specific task data
app.get('/task/:id', async (req, res) => {
  try {
    console.log(req.body);
    const task = await Task.findById(req.params.id);
    return res.json({ success: true, task });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
});

// /user/:id GET method for specific user data
app.get('/user/:id', async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.findById(req.params.id);
    return res.json({ success: true, user });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
});

// /task/:id PATCH method for specific Task Data
app.patch('/task/:id', async (req, res) => {
  console.log(req.body);
  const task = await findByIdAndUpdate(req.params.id);
});

// const { getMaxListeners } = require('./model/User');

// async function db() {
//   try {
//  // Adding data on database for User
//     const user = new User({
//       name: 'Keshab',
//       age: 24,
//       email: 'LORD@gmail.Com',
//       password: '1234567890',
//     });

//     await user.save();
//     console.log(user);
//   } catch (e) {
//     console.log(colors.red.underline.bold(e.message));
//   }
// }

// db();

// async function db() {
//   try {
//     // Adding data on database for Task
//     const task = new Task({
//       description: 'This is Task 02',
//       isCompleted: true,
//     });

//     await task.save();
//     console.log(task);
//   } catch (e) {
//     console.log(colors.red.underline.bold(e.message));
//   }
// }

// db();

/*

  /task POST method
  /task GET method
  /task/:id GET method
  /task/:id PATCH method
  /task/:id DELETE method
  
  /user POST method
  /user GET method (get all data)
  /user/:id GET method (get specific data)
  /user/:id PATCH method (edit specific data)
  /user/:id DELETE method
*/
