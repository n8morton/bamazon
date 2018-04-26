DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  department VARCHAR(45) NOT NULL,
  price DECIMAL(6,2) NOT NULL,
  stock INT NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (name, department, price, stock)
VALUES  ("shirt", "clothing", 12.99, 20), 
        ("pants", "clothing", 15.99, 20),  
        ("hat", "clothing", 9.99, 25),
        ("blender", "kitchen", 39.95, 30),
        ("toaster", "kitchen", 21.50, 30),
        ("microwave", "kitchen", 45.50, 30),
        ("towel", "bathroom", 9.97, 25),
        ("shower curtain", "bathroom", 12.99, 20),
        ("pillow", "bedroom", 20.00, 30),
        ("bed sheets", "bedroom", 29.95, 25);


