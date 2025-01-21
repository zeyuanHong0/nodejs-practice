const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express");
});

// 全局中间件
app.use(middleware);

// 中间件函数
function middleware(req, res, next) {
  console.log("全局中间件");
  const { url, ip } = req;
  if (url !== "/favicon.ico") {
    fs.appendFileSync(path.resolve(__dirname, "log.txt"), `${url} ${ip}\n`);
    next();
  }
}

app.get("/home", (req, res) => {
  res.send("前台首页");
});
app.get("/admin", (req, res) => {
  res.send(`后台首页`);
});
app.get("*", (req, res) => {
  res.send("<h1>404 NotFound</h1>");
});

app.listen(3000, () => {
  console.log("服务开启成功");
});
