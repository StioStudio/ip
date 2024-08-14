import * as http from "http";

const server = http.createServer((request, response) => {
    response.statusCode = 200
    response.writeHead(200, {
        "Content-Type": "text/plain",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    });
    response.end(request.headers['cf-connecting-ip']);
}).listen(5004);