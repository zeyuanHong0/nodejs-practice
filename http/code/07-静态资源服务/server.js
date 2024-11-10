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
  // 判断请求方式
  if (req.method !== 'GET') {
    res.statusCode = 405;
    res.end('<h1>405 Method Not Allowed</h1>');
    return;
  }
  const { pathname } = new URL(req.url, 'http://127.0.0.1');
  const filePath = path.join(__dirname, 'page', pathname);
  console.log('filePath', filePath);
  fs.readFile(filePath, 'utf8', (err, data) => {
    const ext = path.extname(filePath).slice(1);
    const type = mimes[ ext ] || 'application/octet-stream';
    console.log('type', type);
    res.setHeader('Content-Type', `${ type }; charset=utf-8`);
    if (err) {
      switch (err.code) {
        case 'ENOENT':
          res.statusCode = 404;
          res.end('<h1>404 Not Found</h1>');
          break;
        case 'EACCES':
          res.statusCode = 403;
          res.end('<h1>403 Forbidden</h1>');
          break;
        default:
          res.statusCode = 500;
          res.end('<h1>500 Internal Server Error</h1>');
      }
    } else {
      res.end(data);
    }
  });
});

server.listen(9000, () => {
  console.log('server is running at http://localhost:9000');
});