const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : Object.keys(req.url).length > 1 ? req.url.substring(1) : req.url);
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end("Not found");
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
}).listen(8080, () => console.log('Server running on 8080'));
