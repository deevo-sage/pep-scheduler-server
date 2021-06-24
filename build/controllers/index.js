"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const teacher_1 = __importDefault(require("./teacher"));
const classes_1 = __importDefault(require("./classes"));
exports.default = {
    teachercontrollers: teacher_1.default,
    classcontrollers: classes_1.default,
};
