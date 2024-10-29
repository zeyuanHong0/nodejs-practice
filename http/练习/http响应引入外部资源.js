const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const htmlPath = path.join(__dirname, '../资料/table.html');
  const cssPath = path.join(__dirname, '../资料/table.css');
  const jsPath = path.join(__dirname, '../资料/table.js');
  const { pathname } = new URL(req.url, 'http://127.0.0.1');
  console.log(pathname);
  if (pathname === '/') {
    fs.readFile(htmlPath, 'utf8', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    })
  } else if (pathname === '/table.css') {
    fs.readFile(cssPath, 'utf8', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.end(data);
    })
  } else if (pathname === '/table.js') {
    fs.readFile(jsPath, 'utf8', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.end(data);
    })
  } else {
    res.setStatusCode = 404;
    res.end('<h1>404 Not Found</h1>');
  }

});

server.listen(9000, () => {
  console.log('server is running at http://localhost:9000');
});