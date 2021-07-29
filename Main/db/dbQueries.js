const connection = require('./connection');

class DB {
    constructor(connection){
        this.connection = connection
    }
    findAllEmployees(){
        return this.connection.query(
            "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.department_name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT Join role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"  
            )
    }
    viewAllDepartments(){
        return this.connection.query(
            "SELECT department.id, department.department_name FROM department;"
        )
    }
    viewAllRoles(){
        return this.connection.query(
            "SELECT role.id, role.title, role.salary, role.department_id  FROM Role;"
        )
    }
    addDepartment(depart){
        console.log(depart);
        return this.connection.query("INSERT INTO department SET ?" , depart)
    }
    addRole(role){
        return this.connection.query("INSERT INTO role SET ?" , role)
    }
    addEmployee(){
        return this.connection.query(
            "INSERT INTO employee SET ?" , depart
        )
    }
    updateEmployee(){
        return this.connection.query(
            //"SELECT role.id, role.title, role.salary, role.department_id  FROM Role;"
        )
    }
}

module.exports = new DB(connection);