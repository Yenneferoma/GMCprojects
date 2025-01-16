-- Data Definition Language


 CREATE DATABASE IF NOT EXISTS products;

USE products;

CREATE TABLE
    IF NOT EXISTS Customers (
        customer_id INT AUTO_INCREMENT PRIMARY KEY,
        customer_name VARCHAR(50) NOT NULL,
        customer_tel VARCHAR(15) NOT NULL UNIQUE
    );
    
    CREATE TABLE
    IF NOT EXISTS Products (
        Product_id INT AUTO_INCREMENT PRIMARY KEY,
        Product_name VARCHAR(20) NOT NULL,
        Price DECIMAL(10, 2) NOT NULL,
        CHECK (price >= 0)
    );
    
    CREATE TABLE
    IF NOT EXISTS Orders (
        Order_id INT AUTO_INCREMENT PRIMARY KEY,
        Quantity INT NOT NULL CHECK (Quantity > 0),
        Total_amount DECIMAL(10, 2) NOT NULL,
        Order_date DATETIME DEFAULT CURRENT_TIMESTAMP,
        Customer_id INT,
        FOREIGN KEY (Customer_id) REFERENCES Customers (Customer_id) ON DELETE CASCADE,
        Product_id INT,
        FOREIGN KEY (Product_id) REFERENCES Products (Product_id) ON DELETE CASCADE
    );
    
    ALTER TABLE Products
ADD Category VARCHAR(50) NOT NULL;

ALTER TABLE Orders
ADD Order_Date DATE DEFAULT CURRENT_TIMESTAMP;

SHOW DATABASES;
DESCRIBE customers;
DESCRIBE products;
DESCRIBE orders;


-- Data Manipulation Language

INSERT INTO Products (Product_name, Category, Price) 
VALUES 
('Samsung Galaxy S20', 'Smartphone', 3299),
('ASUS Notebook', 'PC', 4599);

INSERT INTO Customers (Customer_name, Customer_tel) 
VALUES 
('ALI', 71321009),
('ASMA', 77345823);

INSERT INTO Orders (Order_Date, Quantity, Total_amount) 
VALUES 
( NULL, 2, 9198), 
('2020-05-28', 1, 3299);

INSERT INTO Orders (Customer_id, Product_id, Order_Date, Quantity, Total_amount) 
VALUES 
(1, 2, NULL, 2, 9198), 
(2, 1, '2020-05-28', 1, 3299);

SELECT * FROM customers;
SELECT * FROM products;
SELECT * FROM orders;

SELECT * FROM orders WHERE customer_id = "1";

SELECT * FROM orders WHERE customer_id = "2";



