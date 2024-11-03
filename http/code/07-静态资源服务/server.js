const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // const htmlPath = path.join(__dirname, '../资料/table.html');
  // const cssPath = path.join(__dirname, '../资料/table.css');
  // const jsPath = path.join(__dirname, '../资料/table.js');
  const { pathname } = new URL(req.url, 'http://127.0.0.1');
  const filePath = path.join(__dirname, 'page', pathname);
  console.log('filePath', filePath);
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.setStatusCode = 404;
      res.end('<h1>404 Not Found</h1>');
    } else {
      res.end(data);
    }
  });
});

server.listen(9000, () => {
  console.log('server is running at http://localhost:9000');
});