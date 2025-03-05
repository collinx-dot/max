const jsonServer = require("json-server");
const data = require("./db.json");
const server = jsonServer.create();
server.use(jsonServer.defaults());

const router = jsonServer.router(data);
server.use(router);

server.listen();
console.log("JSON Server is running!")

module.exports = server;