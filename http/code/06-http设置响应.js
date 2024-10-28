const http = require("http");

const server = http.createServer((req, res) => {
  // 设置响应状态码
  res.statusCode = 200;
  // 设置响应状态描述
  res.statusMessage = "it's ok";
  // 设置响应头
  res.setHeader("Content-Type", "text/html;charset=utf-8");
  // res.setHeader("Test", [ 1, 2, 3 ]);
  // 设置响应体
  res.write("hello world");
  res.end();
});

server.listen(9000, () => {
  console.log("server is running at http://localhost:9000");
});