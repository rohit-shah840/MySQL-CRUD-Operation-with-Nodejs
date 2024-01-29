# Employee Management System API

This Node.js project provides a RESTful API for performing CRUD (Create, Read, Update, Delete) operations on an employee database. The API is built using Node.js and MySQL, leveraging the Express framework for handling HTTP requests and defining the server behavior.

## Features

- **Create:** Add new employee records to the database.
- **Read:** Retrieve employee information from the database.
- **Update:** Modify existing employee records in the database.
- **Delete:** Remove employee records from the database.

## Installation

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Configure the MySQL database connection in the `config.js` file.
4. Start the server using `npm start`.

## API Endpoints

- **GET /employees:** Retrieve all employees.
- **GET /employees/:id:** Retrieve a specific employee by ID.
- **POST /employees:** Add a new employee.
- **PUT /employees/:id:** Update an employee by ID.
- **DELETE /employees/:id:** Delete an employee by ID.

## Usage

The API can be used to manage employee records by making HTTP requests to the defined endpoints. It provides a simple and efficient way to perform CRUD operations on the employee database.

## Technologies Used

- Node.js
- Express
- MySQL
- npm packages: mysql2, express

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## Author

[Rohit Shah]
