const http = require("http");

const server = http.createServer((req, res) => {
  res.end("hello world");
  // 获取请求方法
  //   console.log(req.method);
  // 获取请求url
  //   console.log(req.url);
  // 获取 http 版本号
  //   console.log(req.httpVersion);
  // 获取 http 请求头
  console.log(req.headers);
});

server.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});
