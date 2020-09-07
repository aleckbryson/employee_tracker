var inquirer = require("inquirer");
var mysql = require("mysql");
var fs = require("fs");

// Connection created for mySQL
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3307
    port: 3307,

    // Your username
    user: "root",

    // Your password
    password: "rootroot",
    database: "employee_trackerDB"
});

//Questions added for to ask user whether they want to add, view, or update the department, role, or employee section
inquirer.prompt([
    {
        type: "list",
        message: "What would you like to do?",
        name: "choice",
        choices: [
            "Add Departments, Roles, Employees",
            "View Departments, Roles, Employees",
            "Update Employee Roles"
        ]
    },
    {
        type: "list",
        message: "Would you like to add a Department, Role, or Employee?",
        name: "add",
        choices: [
            "Department",
            "Role",
            "Employee"
        ]
    },
    {
        type: "input",
        name: "addDepartment",
        message: "What Department would you like to add?"
    },
    {
        type: "input",
        name: "addRole",
        message: "What Role would you like to add?"
    },
    {
        type: "input",
        name: "addEmployee",
        message: "What Employee would you like to add?"
    },
    {
        type: "list",
        message: "Would you like to view Departments, Roles or Employees?",
        name: "view",
        choices: [
            "Departments",
            "Roles",
            "Employees"
        ]
    },
    {
        type: "input",
        name: "viewDepartment",
        message: "What Department would you like to view?"
    },
    {
        type: "input",
        name: "viewRole",
        message: "What Role would you like to view?"
    },
    {
        type: "input",
        name: "viewEmployee",
        message: "What Employee would you like to view?"
    },
    {
        type: "list",
        message: "Would you like to update a Department, Role or Employee?",
        name: "update",
        choices: [
            "Department",
            "Role",
            "Employee"
        ]
    },
    {
        type: "input",
        name: "updateDepartment",
        message: "What Department would you like to update?"
    },
    {
        type: "input",
        name: "updateRole",
        message: "What Role would you like to update?"
    },
    {
        type: "input",
        name: "updateEmployee",
        message: "What Employee would you like to update?"
    }
]).then(answers => {
    connection.connect(function (err) {
        if (err) throw err;
        console.log("connected as id " + connection.threadId);
        afterConnection();
    });

    function afterConnection() {
        connection.query("SELECT * FROM department", function (err, res) {
            if (err) throw err;
            console.table(res);
            connection.end();
        });
    }

});