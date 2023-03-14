const mongoose = require('mongoose');
const colors = require('colors');

mongoose
  .connect('mongodb://127.0.0.1:27017/task')
  .then(() => console.log('Database is connected!'))
  .catch((err) => console.log(err));

//Importing using vanilla javascript
const User = require('./model/User');
const Task = require('./model/Task');
// const { getMaxListeners } = require('./model/User');

async function db() {
  try {
    const user = new User({
      name: 'Keshab',
      age: 24,
      email: 'LORD@gmail.Com',
      password: '1234567890',
    });

    await user.save();
    console.log(user);
  } catch (e) {
    console.log(colors.red.underline.bold(e.message));
  }
}

db();
