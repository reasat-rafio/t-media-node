// const Logger = require("./logger");

// const logger = new Logger();

// logger.on("massage", (data) => console.log("called Listener", data));

// logger.log("hello");

const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("<h1>Home</h1>");
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server running in the port ${PORT}`));
