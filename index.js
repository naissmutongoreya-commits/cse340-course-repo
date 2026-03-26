const http = require('http');
const port = process.env.PORT || 10000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, CSE 340 Student!');
});

server.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
});

