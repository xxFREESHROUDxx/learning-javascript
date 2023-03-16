const mongoose = require('mongoose');
const express = require('express');

const app = express();
app.use(express.json()); // Always load this middleware

mongoose
  .connect('mongodb://127.0.0.1:27017/task')
  .then(() => console.log('Database is connected!'))
  .catch((err) => console.log(err));

// adding routes for the data in routes folder
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');

// pass routes using middleware to access it from routes folder
app.use(userRoutes);
app.use(taskRoutes);

const port = process.env.PORT || 4040;
app.listen(port, () => console.log(`Server is running at port ${port}`));

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
