var inquirer = require ("inquirer");
var mysql = require("mysql");
var fs = require("fs");


inquirer.prompt([
    {
        type: "selectLine",
        message: "What would you like to do?",
        name: "choice",
        choices: [
          "Add Departments, Roles, Employees",
          "View Departments, Roles, Employees",
          "Update Employee Roles"
        ]
    },
    {
        type: "selectLine",
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
        type: "selectLine",
        message: "Would you like to view Departments, Roles or Employees?",
        name: "view",
        choices: [
            "Departments",
            "Roles",
            "Employees"
        ]
    },
    {
        type: "selectLine",
        message: "Would you like to update a Department, Role or Employee?",
        name: "update",
        choices: [
            "Department",
            "Role",
            "Employee"
        ]
    }
]).then(answers => {});