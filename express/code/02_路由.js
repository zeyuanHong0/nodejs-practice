const express = require('express');

const app = express();


app.get('/', (req, res) => {
  res.send('这是首页')
})

app.post('/login', (req, res) => {
  res.send('这是登录接口')
})

app.all('*', (req, res) => {
  res.status(404).send('404 Not Found');
});

app.listen(3000, () => {
  console.log('服务器启动成功');
})