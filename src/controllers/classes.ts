import { connectToDB } from "../utils";
import express from "express";
import moment from "moment";
import { classes } from "../types";
const GetClasses = async (req: express.Request, res: express.Response) => {
  //  return res.status(200).send({ classes: req.params.teacher });
  const teacherID = req.params.teacherID;
  const sql = `SELECT * FROM classes  JOIN teachers ON classes.teacherID=teachers.id where teacherID="${teacherID}"`;
  const con = await connectToDB();
  con.query(sql, (err, result) => {
    if (err) {
      res.status(400).send({ message: err });
    }
    const temp = result.filter((i: classes) => {
      const time = moment(i.startTime),
        now = moment();
      return time.diff(now, "month") >= 0;
    });
    res.status(200).send({ classes: temp });
    con.destroy();
  });
};

const GetAllClasses = async (req: express.Request, res: express.Response) => {
  //  return res.status(200).send({ classes: req.params.teacher });
  const sql = `SELECT * FROM classes JOIN teachers ON classes.teacherID=teachers.id;`;
  const con = await connectToDB();
  con.query(sql, (err, result) => {
    con.destroy();
    if (err) {
      return res.status(400).send({ message: err });
    }
    return res.status(200).send({ classes: result });
  });
};
const CreateClass = async (req: express.Request, res: express.Response) => {
  const { teacherID, endtime, starttime, repeating } = req.body;
  if (
    teacherID !== undefined &&
    endtime !== undefined &&
    starttime !== undefined &&
    repeating !== undefined
  ) {
    const sql = `INSERT INTO classes (teacherID,endtime,starttime,repeating) values (${teacherID},'${endtime}','${starttime}',${repeating}  )`;
    console.log(sql);
    const con = await connectToDB();
    con.query(sql, (err, result) => {
      con.destroy();
      if (err) {
        return res.status(400).send({ message: err });
      }
      return res.status(200).send({ classes: result });
    });
  } else res.status(400).send({ message: "bad request" });
};

export default {
  GetClasses,
  GetAllClasses,
  CreateClass,
};
