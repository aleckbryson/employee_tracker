CREATE DATABASE tracker_DB;

USE tracker_DB;

CREATE TABLE department (
id INTEGER NOT NULL AUTO_INCREMENT,
name VARCHAR(30),
PRIMARY KEY (id)
);

CREATE TABLE role (
id INTEGER,
title VARCHAR(30),
salary DECIMAL (7,2),
department_id INTEGER,
PRIMARY KEY (id)
);

CREATE TABLE employee (
id INTEGER,
first_name VARCHAR (30),
last_name VARCHAR (30),
role_id INTEGER,
manager_id INTEGER NOT NULL
);

USE tracker_DB;

DROP TABLE department;

DROP TABLE role;

DROP TABLE employee;

CREATE TABLE department (
id INTEGER NOT NULL AUTO_INCREMENT,
name VARCHAR(30),
PRIMARY KEY (id)
);

CREATE TABLE role (
id INTEGER NOT NULL AUTO_INCREMENT,
title VARCHAR(30),
salary DECIMAL (7,2),
department_id INTEGER,
PRIMARY KEY (id)
);

CREATE TABLE employee (
id INTEGER NOT NULL AUTO_INCREMENT,
first_name VARCHAR (30),
last_name VARCHAR (30),
role_id INTEGER,
manager_id INTEGER,
PRIMARY KEY (id)
);

INSERT INTO department (name)
VALUES ("Sales");

INSERT INTO department (name)
VALUES ("Engineering");

INSERT INTO department (name)
VALUES ("Finance");

INSERT INTO department (name)
VALUES ("Legal");

DROP TABLE role;

DROP TABLE employee;

INSERT INTO role (title, salary)
VALUES ("Sales Lead", "70000");

INSERT INTO role (title, salary)
VALUES ("Salesperson", "60000");

INSERT INTO role (title, salary)
VALUES ("Lead Engineer", "95000");

INSERT INTO role (title, salary)
VALUES ("Software Engineer", "85000");

INSERT INTO role (title, salary)
VALUES ("Accountant", "95000");

INSERT INTO role (title, salary)
VALUES ("Lawyer", "95000");

INSERT INTO role (title, salary)
VALUES ("Legal Team Lead", "98000");

DROP TABLE employee;

INSERT INTO employee (first_name, last_name, manager_id)
VALUES ("Michael", "Thomas", null);

INSERT INTO employee (first_name, last_name, manager_id)
VALUES ("John", "Doe", null);

INSERT INTO employee (first_name, last_name, manager_id)
VALUES ("Malia", "Brown", null);

INSERT INTO employee (first_name, last_name, manager_id)
VALUES ("Karra", "Gardin", null);

INSERT INTO employee (first_name, last_name, manager_id)
VALUES ("Tom", "Allen", null);

INSERT INTO employee (first_name, last_name, manager_id)
VALUES ("Sarah", "Lourd", null);

INSERT INTO employee (first_name, last_name, manager_id)
VALUES ("Lebron", "James", null);




