const http = require('http');
const fs = require('fs');
const path = require('path');

const mimes = {
  css: 'text/css',
  js: 'text/javascript',
  html: 'text/html',
  json: 'application/json',
  png: 'image/png',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  gif: 'image/gif',
  svg: 'image/svg+xml',
  ico: 'image/x-icon',
  mp3: 'audio/mpeg',
  mp4: 'video/mp4',
  pdf: 'application/pdf',
  doc: 'application/msword',
  xls: 'application/vnd.ms-excel',
  ppt: 'application/vnd.ms-powerpoint',
  woff: 'application/font-woff',
  ttf: 'application/font-sfnt',
  eot: 'application/vnd.ms-fontobject',
  otf: 'application/font-sfnt',
}

const server = http.createServer((req, res) => {
  // const htmlPath = path.join(__dirname, '../资料/table.html');
  // const cssPath = path.join(__dirname, '../资料/table.css');
  // const jsPath = path.join(__dirname, '../资料/table.js');
  const { pathname } = new URL(req.url, 'http://127.0.0.1');
  const filePath = path.join(__dirname, 'page', pathname);
  console.log('filePath', filePath);
  fs.readFile(filePath, 'utf8', (err, data) => {
    const ext = path.extname(filePath).slice(1);
    const type = mimes[ ext ] || 'application/octet-stream';
    console.log('type', type);
    res.setHeader('Content-Type', `${type}; charset=utf-8`);
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