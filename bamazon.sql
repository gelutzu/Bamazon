
DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Funko Pop Disney","Toys & Games", 10.99, 10),
        ("Echo Dot", "Electronics", 49.99, 100),
        ("A Wrinkle in Time", "Books", 4.66, 50),
        ("Turbo Tax Deluxe", "Software", 44.86, 25),
        ("BamazonBasics Microfiber Cleaning Cloth", "Automotive", 9.99, 300),
        ("Dr. Brown's Bottle Brush", "Baby", 4.93, 50),
        ("GE Refrigerator Water Filter", "Appliances", 44.29, 100),
        ("Fire TV Stick", "Electronics", 49.99, 7 ),
        ("The Subtle Art of Not Giving a F*ck", "Books", 14.99, 42),
        ("Norton Security Deluxe", "Software", 34.48, 500);
