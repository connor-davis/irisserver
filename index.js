"use strict";

let express = require("express");
let app = express();
let http = require("http").createServer(app);
let io = require("socket.io")(http);
let cors = require("cors");

app.use(cors());

io.on("connection", (socket) => {
    socket.on("disconnect", () => {

    });
});

let port = 8080 || process.env.PORT;

(async () => {
    http.listen(port);
})();