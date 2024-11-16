const express = require('express');

const app = express();

app.get('/request', (req, res) => {
  // console.log(req.method);
  // console.log(req.url);
  // console.log(req.httpVersion);
  // console.log(req.headers);

  console.log(req.path);
  console.log(req.query);
  console.log(req.ip)
  res.send('请求成功');
})

app.listen(3000, () => {
  console.log('服务器启动成功');
})