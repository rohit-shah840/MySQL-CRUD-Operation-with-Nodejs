const express = require("express"),
  router = express.Router();

const service = require("../services/employee.service");

//url for the below ===> http://localhost:3000/api/employees/
router.get("/", async (req, res) => {
  const employees = await service.getAllEmployees();
  res.send(employees);
});

//url for the below ===> http://localhost:3000/api/employees/{id}
router.get("/:id", async (req, res) => {
  const employee = await service.getEmployeeById(req.params.id);
  if (employee.length == 0)
    res.status(404).json("no record with given id : " + req.params.id);
  else res.send(employee);
});

//url for the below ===> http://localhost:3000/api/employees/{id}
router.delete("/:id", async (req, res) => {
  const affectedRows = await service.deleteEmployeeById(req.params.id);
  if (affectedRows == 0)
    res.status(404).json("no record with given id : " + req.params.id);
  else res.send("deleted successfully.");
});

//url for the below ===> http://localhost:3000/api/employees/
router.post("/", async (req, res) => {
  await service.addOrEditEmployee(req.body);
  res.status(201).send("data inserted successfully!!");
});

//url for the below ===> http://localhost:3000/api/employees/{id}
router.put("/:id", async (req, res) => {
  const affectedRows = await service.addOrEditEmployee(req.body, req.params.id);
  if (affectedRows == 0)
    res.status(404).json("no record with given id : " + req.params.id);
  else res.send("data updated successfully.");
});

module.exports = router;

//note in the {id} you should palced integer value as id of employee.
