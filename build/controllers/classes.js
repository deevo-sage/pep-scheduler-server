"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const moment_1 = __importDefault(require("moment"));
const GetClasses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //  return res.status(200).send({ classes: req.params.teacher });
    const teacherID = req.params.teacherID;
    const sql = `SELECT * FROM classes  JOIN teachers ON classes.teacherID=teachers.id where teacherID="${teacherID}"`;
    const con = yield utils_1.connectToDB();
    con.query(sql, (err, result) => {
        if (err) {
            res.status(400).send({ message: err });
        }
        const temp = result.filter((i) => {
            const time = moment_1.default(i.startTime), now = moment_1.default();
            return time.diff(now, "month") >= 0;
        });
        res.status(200).send({ classes: temp });
        con.destroy();
    });
});
const GetAllClasses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //  return res.status(200).send({ classes: req.params.teacher });
    const sql = `SELECT * FROM classes JOIN teachers ON classes.teacherID=teachers.id;`;
    const con = yield utils_1.connectToDB();
    con.query(sql, (err, result) => {
        con.destroy();
        if (err) {
            return res.status(400).send({ message: err });
        }
        return res.status(200).send({ classes: result });
    });
});
const CreateClass = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { teacherID, endtime, starttime, repeating } = req.body;
    if (teacherID !== undefined &&
        endtime !== undefined &&
        starttime !== undefined &&
        repeating !== undefined) {
        const sql = `INSERT INTO classes (teacherID,endtime,starttime,repeating) values (${teacherID},'${endtime}','${starttime}',${repeating}  )`;
        console.log(sql);
        const con = yield utils_1.connectToDB();
        con.query(sql, (err, result) => {
            con.destroy();
            if (err) {
                return res.status(400).send({ message: err });
            }
            return res.status(200).send({ classes: result });
        });
    }
    else
        res.status(400).send({ message: "bad request" });
});
exports.default = {
    GetClasses,
    GetAllClasses,
    CreateClass,
};
