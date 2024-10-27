const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
    console.log(req.url);
    const url = new URL(req.url, `http://${req.headers.host}`);
    console.log(url)
    // 路径
    console.log(url.pathname);
    // 查询字符串
    console.log(url.searchParams.get("name"), url.searchParams.get("age"));
    res.end("ok");
});

server.listen(9000, () => {
    console.log("server is running at http://localhost:9000");
});