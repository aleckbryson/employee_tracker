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
            return addRole();
        case "Add Employee":
            return addEmployee();
        case "View Department":
            return viewDepartment();
        case "View Role":
            return viewRole();
        case "View Employee":
            return viewEmployee();
        case "Update Department":
            return updateDepartment();
        case "Update Role":
            return updateRole();
        case "Update Employee":
            return updateEmployee();
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

function viewRole() {
    connection.query("SELECT * FROM role", function (err, res) {
        if (err) throw err;
        console.table(res);
        connection.end();
    });
}

function viewEmployee() {
    connection.query("SELECT * FROM role", function (err, res) {
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

function addRole() {
    console.log("Inserting a new Role...\n");
    var query = connection.query(
        "INSERT INTO role SET ?",
        {
            title: `${name}`,
            salary: `${salary}`
        },
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " role inserted!\n");
            // Call updateRole AFTER the INSERT completes
            updateRole();
        }
    );

    // logs the actual query being run
    console.log(query.sql);
}

function addEmployee() {
    console.log("Inserting a new Employee...\n");
    var query = connection.query(
        "INSERT INTO employee SET ?",
        {
            title: `${name}`,
            first_name: `${first_name}`,
            last_name: `${first_name}`
        },
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " employee inserted!\n");
            // Call updateEmployee AFTER the INSERT completes
            updateEmployee();
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
            // Call deleteDepartment AFTER the UPDATE completes
            deleteDepartment();
        }
    );

    // logs the actual query being run
    console.log(query.sql);
}

function updateRole() {
    console.log("Updating all Roles...\n");
    var query = connection.query(
        "UPDATE role SET ? WHERE ?",
        [
            {
                title: `${name}`,
                salary: `${salary}`
            }
        ],
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " role updated!\n");
            // Call deleteRole AFTER the UPDATE completes
            deleteRole();
        }
    );

    // logs the actual query being run
    console.log(query.sql);
}

function updateEmployee() {
    console.log("Updating all Employees...\n");
    var query = connection.query(
        "UPDATE employee SET ? WHERE ?",
        [
            {
                title: `${name}`,
                first_name: `${first_name}`,
                last_name: `${first_name}`
            }
        ],
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " employee updated!\n");
            // Call deleteRole AFTER the UPDATE completes
            deleteEmployee();
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
            // Call viewDepartment AFTER the DELETE completes
            viewDepartments();
        }
    );
}

function deleteRole() {
    console.log("Deleting selected Role...\n");
    connection.query(
        "DELETE FROM role WHERE ?",
        {
            title: `${name}`,
            salary: `${salary}`
        },
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " role deleted!\n");
            // Call viewRoles AFTER the DELETE completes
            viewRoles();
        }
    );
}

function deleteEmployee() {
    console.log("Deleting selected Role...\n");
    connection.query(
        "DELETE FROM employee WHERE ?",
        {
            title: `${name}`,
            first_name: `${first_name}`,
            last_name: `${first_name}`
        },
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " employee deleted!\n");
            // Call viewEmployees AFTER the DELETE completes
            viewEmployees();
        }
    );
}

function viewDepartments() {
    console.log("Selecting all Departments...\n");
    connection.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        connection.end();
    });
}

function viewRoles() {
    console.log("Selecting all Roles...\n");
    connection.query("SELECT * FROM role", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        connection.end();
    });
}

function viewEmployees() {
    console.log("Selecting all Employees...\n");
    connection.query("SELECT * FROM employee", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        connection.end();
    });
}