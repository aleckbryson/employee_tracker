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
    database: "trackerDB"
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
            "Update Departments, Roles, Employees"
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

    //switch statements added to call function for user selection on whether to add, view or update
    switch (answers.action) {
        case "Add Department":
            return addDepartment();
        case "Add Role":
            return;
        case "Add Employee":
            return;
        case "View Department":
            return;
        case "View Role":
            return;
        case "View Employee":
            return;
        case "Update Department":
            return;
        case "Update Role":
            return;
        case "Update Employee":
            return;
    }

});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    viewDepartment();
});

function viewDepartment() {
    connection.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;
        console.table(res);
        connection.end();
    });
}

function addDepartment() {
    console.log("Inserting a new Department...\n");
    var query = connection.query(
        "INSERT INTO department SET ?",
        {
            name: `${name}`
        },
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " department inserted!\n");
            // Call updateDepartment AFTER the INSERT completes
            updateDepartment();
        }
    );

    // logs the actual query being run
    console.log(query.sql);
}

function updateDepartment() {
    console.log("Updating all Departments...\n");
    var query = connection.query(
        "UPDATE department SET ? WHERE ?",
        [
            {
                name: `${name}`
            }
        ],
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " Department updated!\n");
            // Call deleteProduct AFTER the UPDATE completes
            deleteDepartment();
        }
    );

    // logs the actual query being run
    console.log(query.sql);
}

function deleteDepartment() {
    console.log("Deleting selected Department...\n");
    connection.query(
        "DELETE FROM department WHERE ?",
        {
            name: `${name}`
        },
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " department deleted!\n");
            // Call readDepartment AFTER the DELETE completes
            readDepartments();
        }
    );
}

function readDepartments() {
    console.log("Selecting all Departments...\n");
    connection.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        connection.end();
    });
}