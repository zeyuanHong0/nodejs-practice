const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, '../资料/table.html');
  fs.readFile(filePath, 'utf8', (err, data) => {
    // console.log(data);
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});

server.listen(9000, () => {
  console.log('server is running at http://localhost:9000');
});