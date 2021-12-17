var http = require('http');
var tl = require('./todolist');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

  // res.write("action en cours: " + tl.mytodolist());
  res.write(" Ecrire ici: " + tl.addElement() + " ");
  res.write(" " + tl.showElement() + " ");
  // res.write(req.url);
  console.log(req.url)
  res.end('.');
}).listen(8080);