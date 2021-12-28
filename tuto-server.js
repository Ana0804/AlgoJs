// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('Hello World!'); //-->write what is in the parenthesis
//   res.end();
// }).listen(8080);

// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(req.url); //-->write what is in the url
//   res.end();
// }).listen(8080);

// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//     // fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) { //-->create a file
//     //     if (err) throw err;
//     //     console.log('Saved!');
//     //   });
//     // fs.open('mynewfile1.txt', 'w', function (err, file) { //-->open a file
//     //     if (err) throw err;
//     //     console.log('Saved!');
//     //   });
//     // fs.writeFile('mynewfile1.txt', 'Hello content!', function (err) { //-->replacesthe specified file and content if it exists
//     //     if (err) throw err;
//     //     console.log('Saved!');
//     //   });
//     // fs.unlink('mynewfile1.txt', function (err) { //-->delete a file
//     //     if (err) throw err;
//     //     console.log('File deleted!');
//     //   });
//     // fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) { //-->rename a file
//     //     if (err) throw err;
//     //     console.log('File Renamed!');
//     // });
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     // res.write(data);
//     return res.end();
// }).listen(8080);

// var url = require('url');
// var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
// var q = url.parse(adr, true);

// console.log(q.host); //returns 'localhost:8080'
// console.log(q.pathname); //returns '/default.htm'
// console.log(q.search); //returns '?year=2017&month=february'

// var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
// console.log(qdata.month); //returns 'february'

// var http = require('http');
// var url = require('url');
// var fs = require('fs');
// http.createServer(function (req, res) {
//   var q = url.parse(req.url, true);
//   var filename = "." + q.pathname;
//   fs.readFile(filename, function(err, data) {
//     if (err) {
//       res.writeHead(404, {'Content-Type': 'text/html'});
//       return res.end("404 Not Found");
//     } 
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);

// var http = require('http');
// var uc = require('upper-case');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(uc.upperCase("Hello World!"));
//   res.end();
// }).listen(8080);