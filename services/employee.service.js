const db = require("../db");

module.exports.getAllEmployees = async () => {
  const [records] = await db.query("SELECT * from employees");
  return records;
};

module.exports.getEmployeeById = async (id) => {
  const [record] = await db.query("SELECT * from employees where id = ?", [id]);
  return record;
};

module.exports.deleteEmployeeById = async (id) => {
  const [{ affectedRows }] = await db.query(
    "DELETE  from employees where id = ?",
    [id]
  );
  return affectedRows;
};

//method for insert or update
module.exports.addOrEditEmployee = async (obj, id = 0) => {
  const [[[{ affectedRows }]]] = await db.query(
    "CALL usp_employee_add_or_edit(?,?,?,?)",
    [id, obj.name, obj.employee_code, obj.salary]
  );
  return affectedRows;
};
