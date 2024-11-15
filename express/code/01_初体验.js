const express = require('express');

const app = express();

app.get('/getUserInfo', (req, res) => {
  res.send({
    name: 'why',
    age: 18
  })
})

app.listen(3000, () => {
  console.log('服务器启动成功');
})