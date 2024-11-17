const express = require('express')
const singers = require('../资料/singer.json')

const app = express()


app.get('/singer/:id', (req, res) => {
  // request.params 获取路由参数
  const id = req.params.id
  const singer = singers.find(item => item.id === id)
  res.send(
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>歌手详情</title>
    </head>
    <body>
      <h1>${ singer.name }</h1>
      <img style="width: 200px;height: 200px" src="${ singer.avatar }" alt="">
    </body>
    </html>
    `
  )
})

app.listen((3000), () => {
  console.log('服务器启动成功')
})