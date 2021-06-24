import { connectToDB } from "../utils";
import express from "express";
const getTeacher = async (req: express.Request, res: express.Response) => {
 
    const sql = `SELECT * FROM teachers`;
  const con = await connectToDB();
  con.query(sql, (err, result) => {
    if (err) {
      res.status(400).send({ message: "server error" });
    }
    res.status(200).send({ teachers: result });
    con.destroy();
  });
};
export default {
  getTeacher,
};
