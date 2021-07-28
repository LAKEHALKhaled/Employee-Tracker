# Employee Tracker

THis is a command-line application to manage a company's employee database, using Node.js, Inquirer, and MySQL.
**content management systems (CMS)** allow you to easily view and interact with information stored in databases. 


## User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```


## How the application works

WHEN I start the application, i am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role.

WHEN I choose to view all department, i am presented with a formatted table showing department names and department ids

WHEN I choose to view all roles, i am presented with the job title, role id, the department that role belongs to, and the salary for that role

WHEN I choose to view all employees, i am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

WHEN I choose to add a department, i am prompted to enter the name of the department and that department is added to the database

WHEN I choose to add a role, i am prompted to enter the name, salary, and department for the role and that role is added to the database

WHEN I choose to add an employee, i am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

WHEN I choose to update an employee role, i am prompted to select an employee to update and their new role and this information is updated in the database 



## packages

I used MySQL2 package to connect to the MySQL database and perform queries, the Inquirer package to interact with the user via the command line, and the console.table package to print MySQL rows to the console.

## link to the video : 
https://drive.google.com/file/d/1G_8frhF5UBMbLzjujJREylplT4KBzBSV/view?usp=sharing
