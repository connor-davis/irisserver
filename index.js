"use strict";

let express = require("express");
let app = express();
let http = require("http").createServer(app);
let io = require("socket.io")(http);
let cors = require("cors");
let morgan = require("morgan");
let bodyParser = require("body-parser");
let { ExpressPeerServer } = require("peer");

app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

io.on("connection", (socket) => {
    console.log("new connection.");

    socket.on("disconnect", () => {

    });
});

let port = 4493 || process.env.PORT;

(async () => {
    http.listen(port);
})();