var mysql = require("mysql");
require("dotenv").config();
var con = mysql.createConnection({
  host: process.env.MYSQL_ADDON_HOST,
  database: process.env.MYSQL_ADDON_DB,
  user: process.env.MYSQL_ADDON_USER,
  password: process.env.MYSQL_ADDON_PASSWORD,
});
console.log({
  host: process.env.MYSQL_ADDON_HOST,
  database: process.env.MYSQL_ADDON_DB,
  user: process.env.MYSQL_ADDON_USER,
  password: process.env.MYSQL_ADDON_PASSWORD,
});
con.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("connected");
  const tablequery = `
  CREATE TABLE classes (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    teacherID VARCHAR(255) NOT NULL,
    endTime VARCHAR(255) NOT NULL,
    startTime VARCHAR(255) NOT NULL,
    repeating BOOLEAN default false
  );
  `,
    indexquery = `
   CREATE INDEX  idx_teacherName
ON classes (teacherID);`;
  
  // con.query(tablequery, (err, res) => {
  //   if (err) throw err;
  //   console.log(res);
    con.query(indexquery, (err, res) => {
      if (err) throw err;
      console.log(res);
    });
  // });
});
