import express from "express";
import controllers from "../controllers";
const router = express.Router();

router.get("/get/:teacherID", controllers.classcontrollers.GetClasses);
router.get("/get", controllers.classcontrollers.GetAllClasses);
router.post("/create", controllers.classcontrollers.CreateClass);
export default router;
