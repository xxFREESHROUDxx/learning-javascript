const mongoose = require('mongoose');
mongoose
  .connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Database is connected!'))
  .catch((err) => console.log(err));

// Schema : Shape of a document
// combine multiple Document -> combine multiple Collection -> Database

// Creating a Schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  isMarried: Boolean,
  salary: Number,
  gender: String,
});

// Creating a Model
const User = mongoose.model('User', userSchema);

// async function storeInformation() {
//   const user = new User({
//     name: 'Baibhav',
//     age: 23,
//     isMarried: false,
//     salary: 1000000,
//     gender: 'Male',
//   });
//   await user.save();
//   console.log(user);
// }

// storeInformation();

// Comparison Operator //
/*
eq | ne | gt | gte | lt | lte | in | nin
*/
// async function fetchInformation() {
//   const users = await User.find({ salary: { $in: [90000, 100000] } });
//   console.log(users);
// }

// fetchInformation();

// And Or Operators
// Problem 01: Find those users whose age is greater than 40 or they are unmarried. Find only name and short them by name
// async function db() {
//   const users = await User.find()
//     .or([{ isMarried: false }, { age: { $gt: 40 } }])
//     .select('name')
//     .sort('-name');
//   console.log(users);
// }

// db();

// Updating MongoDB data
// async function update() {
//   const user = await User.findById('6027d22c7dd46d17c04bdf90');
//   user.isMarried = false;
//   await user.save();
// }

// update();

// Updating using findbyid and update method
// async function update() {
//   const user = await User.findByIdAndUpdate(
//     '6027d22c7dd46d17c04bdf90',
//     { age: 25, isMarried: true },
//     { new: true, runValidators: true }
//   );
// }

// update();

// Delete data from MongoDB using 3 ways
// deleteOne method | deleteMany method | findByIdAndDelete method
async function deleted() {
  await User.findByIdAndDelete('6027d245cc9c6a2a5800440a');
}

deleted();
