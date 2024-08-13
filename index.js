import * as http from "http";

const server = http.createServer((request, response) => {
    response.statusCode = 200
    response.end(request.headers['cf-connecting-ip']);
}).listen(5004);