const mysql = require("mysql2/promise");

const mysqlPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1840_Rohit",
  database: "employee_db",
});

//for checking the connection is build successfull or not
mysqlPool
  .query("Select 1")
  .then(() => console.log("db connection succeded."))
  .catch((err) => console.log("db connection failes. \n" + err));

//exporting the mysqlPoool
module.exports = mysqlPool;
