import mysql from "mysql";

export const connectToDB = () => {
  var con = mysql.createConnection({
    host: process.env.MYSQL_ADDON_HOST,
    database: process.env.MYSQL_ADDON_DB,
    user: process.env.MYSQL_ADDON_USER,
    password: process.env.MYSQL_ADDON_PASSWORD,
  });
  con.connect((err) => {
    console.log("connected");
  });

  return con;
};
