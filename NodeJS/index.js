// const add = require('./calculator/add');
// const subtract = require('./calculator/subtract');
// const multiply = require('./calculator/multiply');
// const division = require('./calculator/division');

// console.log(add(4, 2));
// console.log(subtract(4, 2));
// console.log(multiply(2, 2));
// console.log(division(8, 2));

// const a = parseInt(process.argv[2]);
// const operator = process.argv[3].toLowerCase();
// const b = parseInt(process.argv[4]);

// console.log(a, operator, b);

// if (operator === 'add') {
//   console.log(add(a, b));
// } else if (operator === 'subtract') {
//   console.log(subtract(a, b));
// } else if (operator === 'multiply') {
//   console.log(multiply(a, b));
// } else if (operator === 'division') {
//   console.log(division(a, b));
// } else {
//   console.log('Invalid Operator');
// }

// FileSystem Module
const fs = require('fs');

// Create a file
// fs.writeFile('./app.txt', 'Hello World', (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('File Created');
//   }
// });

// Read a file
// fs.readFile('./app.txt', 'utf-8', (err, data) => {
//   if (err) console.log(err);
//   else console.log(data);
// });

// Rename a file
// fs.rename('./app.txt', './helloworld.txt', (err) => {
//   if (err) console.log(err);
//   else console.log('File Renamed Successfully!');
// });

// Delete a file
// fs.unlink('./helloworld.txt', (err) => {
//   if (err) console.log(err);
//   else console.log('File Deleted!');
// });
