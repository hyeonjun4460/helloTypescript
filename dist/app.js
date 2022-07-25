"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 3000;
app.get("/", function (req, res) {
    res.send("hello typescript");
});
app.listen(port, function () {
    console.log(port + "\uD3EC\uD2B8\uB85C \uCF30\uB2E4.");
});
//# sourceMappingURL=app.js.map