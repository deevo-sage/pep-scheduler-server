import express from "express";
import cors from "cors";
import { urlencoded, json } from "body-parser";
import router from "./routes";
require("dotenv").config();
const app = express();
app.use(cors());
app.use(urlencoded({ extended: false }));
app.use(json());
app.use(router);

app.get("/", (req, res) => {
  res.status(200).send({ messsage: "working" });
});
app.listen(process.env.PORT, () => {
  console.log("server on http://localhost:" + process.env.PORT);
});
