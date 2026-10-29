import http from "node:http";
const server = http.createServer((request, response) => { response.setHeader("content-type", "application/json"); response.end(JSON.stringify({ route: request.url, indexedBlocks: 12, status: "healthy" })); });
server.listen(8790, () => console.log("BlockLens API listening on :8790"));
