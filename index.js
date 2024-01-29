const express = require("express"),
  app = express(),
  bodyparser = require("body-parser");
require("express-async-errors");

//importing the required files
const db = require("./db"),
  employeeRoutes = require("./controllers/employee.controller");

//configuring the routers  in
//middleware
app.use(bodyparser.json());
app.use("/api/employees", employeeRoutes);

//express identified this as a global error handaling
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send("Something went wrong!");
});

//first make sure db connection is successful
//then start the express server.
db.query("Select 1")
  .then(() => {
    console.log("db conncetin is succeded.");
    app.listen(3000, () => console.log("server started at 3000"));
  })
  .catch((err) => console.log("db connectio is failed. \n" + err));
