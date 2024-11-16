const express = require('express');

const app = express();

app.get('/:id.html', (req, res) => {
  res.send('详情页面' + req.params.id);
})

app.listen(3000, () => {
  console.log('服务器启动成功');
})