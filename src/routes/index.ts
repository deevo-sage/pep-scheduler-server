import express from "express";
import teacher from "./teacher";
import classes from "./classes";
const router = express.Router();

router.use("/class", classes);
router.use("/teacher", teacher);

export default router;
