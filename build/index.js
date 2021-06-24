"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = require("body-parser");
const routes_1 = __importDefault(require("./routes"));
require("dotenv").config();
const app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.urlencoded({ extended: false }));
app.use(body_parser_1.json());
app.use(routes_1.default);
app.get("/", (req, res) => {
    res.status(200).send({ messsage: "working" });
});
app.listen(process.env.PORT, () => {
    console.log("server on http://localhost:" + process.env.PORT);
});
