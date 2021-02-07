"use strict";

let express = require("express");
let app = express();
let http = require("http").createServer(app);
let io = require("socket.io")(http);
let cors = require("cors");
let morgan = require("morgan");
let bodyParser = require("body-parser");
let { ExpressPeerServer } = require("peer");
let uuid = require("uuid");

let getClientId = () => {
    return uuid.v4();
};

let peer = ExpressPeerServer(http, {
    debug: false,
    path: "/",
    generateClientId: getClientId,
});

app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/p2p", peer);

io.on("connection", (socket) => {
    socket.on("disconnect", () => {

    });
});

let port = 4493 || process.env.PORT;

(async () => {
    http.listen(port);
})();