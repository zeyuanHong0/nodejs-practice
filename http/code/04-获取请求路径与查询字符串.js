const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
    // 解析req.url
    const parseUrl = url.parse(req.url, true);
    console.log(parseUrl);
    // 路径
    console.log(parseUrl.pathname);
    // 查询字符串
    console.log(parseUrl.query.name, parseUrl.query.age);
    res.end("ok");
});

server.listen(9000, () => {
    console.log("server is running at http://localhost:9000");
});