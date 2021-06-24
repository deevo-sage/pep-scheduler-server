"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = __importDefault(require("../controllers"));
const router = express_1.default.Router();
router.get("/get/:teacherID", controllers_1.default.classcontrollers.GetClasses);
router.get("/get", controllers_1.default.classcontrollers.GetAllClasses);
router.post("/create", controllers_1.default.classcontrollers.CreateClass);
exports.default = router;
