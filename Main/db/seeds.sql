       USE employees;
       
        INSERT INTO department (department_name)
VALUES ("Web Development"),
       ("Data Science"),
       ("Math"),
       ("Linear Algebra"),
       ("History of the Internet"),
       ("Machine Learning"),
       ("Cloud Development");
        INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 96000,3 ),
       ("Engineer", 100123,2 ),
       ("Historian", 94012,6 ),
       ("Mechanic", 66654,7 ),
       ("Salesman", 12125,8  );
       INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Doe', 1, NULL),
    ('Mike', 'Chan', 2, 1),
    ('Ashley', 'Rodriguez', 3, NULL),
    ('Kevin', 'Tupik', 4, 3),
    ('Kunal', 'Singh', 5, NULL),
    ('Malia', 'Brown', 6, 5),
    ('Sarah', 'Lourd', 7, NULL),
    ('Tom', 'Allen', 8, 7);






