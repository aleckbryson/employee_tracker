var inquirer = require ("inquirer");
var mysql = require("mysql");
var fs = require("fs");

//Questions added for to ask user whether they want to add, view, or update the department, role, or employee section
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
        type: "selectLine",
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
]).then(answers => {});