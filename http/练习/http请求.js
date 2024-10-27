const http = require('http');

const server = http.createServer((req, res) => {
    // 配置响应头
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf-8'
    });
    const {method} = req;
    // console.log(new URL(req.url, 'http://localhost:9000'));
    const {pathname} = new URL(req.url, 'http://localhost:9000');
    if (method === 'GET' && pathname === '/login') {
        res.end('登录页面');
    } else if (method === 'GET' && pathname === '/register') {
        res.end('注册页面')
    } else {
        res.end('404 Not Found');
    }
});

server.listen(9000, () => {
    console.log('server is running at http://localhost:9000');
});