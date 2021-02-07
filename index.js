"use strict";

let express = require("express");
let app = express();
let http = require("http").createServer(app);
let io = require("socket.io")(http);
let cors = require("cors");
let morgan = require("morgan");

app.use(cors());
app.use(morgan('combined'))

io.on("connection", (socket) => {
    console.log("new connection.");

    socket.on("disconnect", () => {

    });
});

let port = 8080 || process.env.PORT;

(async () => {
    http.listen(port);
})();