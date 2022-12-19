import http from "http";

const server = http.createServer((req, res) => {
    res.write("hello http server");
    res.end();
})

server.listen(3000);