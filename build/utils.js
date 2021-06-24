"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDB = void 0;
const mysql_1 = __importDefault(require("mysql"));
const connectToDB = () => {
    var con = mysql_1.default.createConnection({
        host: process.env.MYSQL_ADDON_HOST,
        database: process.env.MYSQL_ADDON_DB,
        user: process.env.MYSQL_ADDON_USER,
        password: process.env.MYSQL_ADDON_PASSWORD,
    });
    con.connect((err) => {
        console.log("connected");
    });
    return con;
};
exports.connectToDB = connectToDB;
