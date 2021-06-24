import express from "express";
import controllers from "../controllers";
const router = express.Router();

router.get("/get", controllers.teachercontrollers.getTeacher);

export default router;
