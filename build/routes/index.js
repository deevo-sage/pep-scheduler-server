"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const teacher_1 = __importDefault(require("./teacher"));
const classes_1 = __importDefault(require("./classes"));
const router = express_1.default.Router();
router.use("/class", classes_1.default);
router.use("/teacher", teacher_1.default);
exports.default = router;
