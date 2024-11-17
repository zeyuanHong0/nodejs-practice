const express = require('express');

const app = express();


app.get('/request', (req, res) => {
  res.status(404).set('name', 'zhangsan').send('Hello Express');
})

app.listen(3000, () => {
  console.log('服务开启成功');
})