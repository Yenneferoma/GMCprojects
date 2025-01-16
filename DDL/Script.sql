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


