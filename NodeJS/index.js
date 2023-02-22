// const add = require('./calculator/add');
// const subtract = require('./calculator/subtract');
// const multiply = require('./calculator/multiply');
// const division = require('./calculator/division');

// const { log } = require('console');

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
// const fs = require('fs');

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

//
// const fs = require('fs').promises;

// async function getSum() {
//   let data = await fs.readFile('./data.json', 'utf-8');
//   data = JSON.parse(data);
//   let sum = 0;
//   for (let user of data) {
//     sum += user.salary;
//   }
// console.log('Total Salary: ', sum);
// }
// getSum();

// HTTP Module | Create a Server | Read a html file | Send this data as a response from server

// const http = require('http');
// const url = require('url');
// const fs = require('fs').promises;

// const server = http.createServer(async (req, res) => {
//   if (req.url === '/favicon.ico') return;
//   console.log('Server is running...');
//   // console.log(req.url);

//   const myURL = new URL(req.url, 'http://localhost:3000/');
//   console.log(myURL);
//   console.log(myURL.pathname);

//   const data = await fs.readFile('./new.html', 'utf-8');

//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.end(data);
// });

// const http = require('http');
// const url = require('url');

// const server = http.createServer((req, res) => {
//   console.log('Server is running...');
//   if (req.url === '/favicon.ico') return;
//   console.log(req.url);

//   const myURL = new URL(req.url, 'http://localhost:3000/');
//   console.log(myURL);
//   console.log(myURL.pathname);

//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.end('<h1>Hello Baibhav!</h1>');
// });

// server.listen(3000);

// ? -> query search | & -> get multiple data
// http://localhost:3000/product?id=1&category=tshirt
// Port Range = 0 - 65535

// NPM MPDULE
