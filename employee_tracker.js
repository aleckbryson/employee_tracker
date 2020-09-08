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

    switch (answers.action) {
        case "Add Department":
            return;
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
        


// connection.connect(function (err) {
//             if (err) throw err;
//             console.log("connected as id " + connection.threadId);
//             afterConnection();
//         });
    
//         function afterConnection() {
//             connection.query("SELECT * FROM department", function (err, res) {
//                 if (err) throw err;
//                 console.table(res);
//                 connection.end();
//             });
//         }
    
//         function createProduct() {
//             console.log("Inserting a new product...\n");
//             var query = connection.query(
//                 "INSERT INTO products SET ?",
//                 {
//                     flavor: "Rocky Road",
//                     price: 3.0,
//                     quantity: 50
//                 },
//                 function (err, res) {
//                     if (err) throw err;
//                     console.log(res.affectedRows + " product inserted!\n");
//                     // Call updateProduct AFTER the INSERT completes
//                     updateProduct();
//                 }
//             );
    
//             // logs the actual query being run
//             console.log(query.sql);
//         }
    
//         function updateProduct() {
//             console.log("Updating all Rocky Road quantities...\n");
//             var query = connection.query(
//                 "UPDATE products SET ? WHERE ?",
//                 [
//                     {
//                         quantity: 100
//                     },
//                     {
//                         flavor: "Rocky Road"
//                     }
//                 ],
//                 function (err, res) {
//                     if (err) throw err;
//                     console.log(res.affectedRows + " products updated!\n");
//                     // Call deleteProduct AFTER the UPDATE completes
//                     deleteProduct();
//                 }
//             );
    
//             // logs the actual query being run
//             console.log(query.sql);
//         }
    
//         function deleteProduct() {
//             console.log("Deleting all strawberry icecream...\n");
//             connection.query(
//                 "DELETE FROM products WHERE ?",
//                 {
//                     flavor: "strawberry"
//                 },
//                 function (err, res) {
//                     if (err) throw err;
//                     console.log(res.affectedRows + " products deleted!\n");
//                     // Call readProducts AFTER the DELETE completes
//                     readProducts();
//                 }
//             );
//         }
    
//         function readProducts() {
//             console.log("Selecting all products...\n");
//             connection.query("SELECT * FROM products", function (err, res) {
//                 if (err) throw err;
//                 // Log all results of the SELECT statement
//                 console.log(res);
//                 connection.end();
//             });
//         }