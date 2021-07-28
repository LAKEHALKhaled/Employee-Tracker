const inquirer = require('inquirer')
const db = require('./db/dbQueries')



const questionAll = [ {
    type:'list',
    name: 'service',
    message: "What would you like to do?",
    choices: [
        "view all departments","view all roles", "view all employees", "add a department","add a role","add an employee","update an employee role"
    ]
}
  ]
  const questionDepartment = [ {
    type:'input',
    name: 'department_name',
    message: "What's the name of the department you like to add?"
}
]
const questionRole = [ {
    type:'input',
    name: 'title',
    message: "What's the name of the role?"
},
{
    type:'input',
    name: 'salary',
    message: "What's the salary for the role?"
},
{
    type:'input',
    name: 'department_id',
    message: "What's the department for the role?"
}
]
const questionEmployee = [ {
    type:'input',
    name: 'firstName',
    message: "What's the employee first name?"
},
{
    type:'input',
    name: 'lastName',
    message: "What's the employee Last name?"
},
{
    type:'input',
    name: 'role',
    message: "What's the employee role?"
},
{
    type:'input',
    name: 'manager',
    message: "Who's the employee manager?"
}
]
// fisrt function to be called
const  init = () => {
    AskAgain();
}

//the functions that will make a change to the databases


async function viewEmployees(){
    let employees = await db.findAllEmployees();
    console.table(employees);
    AskAgain()
}

async function viewAllDepartments(){
    let department = await db.viewAllDepartments();
    console.table(department);
    AskAgain()
}

async function viewAllRoles(){
    let roles = await db.viewAllRoles();
    console.table(roles);
    AskAgain()
}

// functions that will manage the prompts to the user



const  AskAgain = () => {
    inquirer.prompt(questionAll).then( (answer) => {
        switch (answer.service) {
            case "view all departments":
                viewAllDepartments();
                break;
                case "view all roles":
                    viewAllRoles()
                break;
                case "view all employees":
                    viewEmployees();
                break;
                case "add a department":
                    WhatDepartement();
                   
                break;
                case "add a role":
                    WhatRole();
                break;
                case "add an employee":
                    
                    addEmployee()
                    
                break;
                case "update an employee role":
                    updateEmployee()
                break;
            default: console.log("Option doesn't exist yet");
                break;
        }
     console.log(answer.service);
    }) 
}

const  WhatDepartement = () => {
    inquirer.prompt(questionDepartment).then( (answer) => {
        console.log(answer);
         db.addDepartment(answer).then(()=> viewAllDepartments())
    }) 
}
const  WhatRole = () => {
    inquirer.prompt(questionRole).then( (answer) => {
    console.log(answer);
     db.addRole(answer).then(()=> viewAllRoles())
     
    }) 
}
const  WhatEmployee = () => {
    inquirer.prompt(questionEmployee).then( (answer) => {
     console.log(answer);
    }) 
}

init();