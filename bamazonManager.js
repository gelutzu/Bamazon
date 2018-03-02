var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username 
    user: "root",

    // Your password
    password: "Horobanc77",
    database: "bamazon_DB"
});

start();

function start() {

    inquirer
        .prompt([{
            name: "options",
            type: "rawlist",
            message: "Would you like to do?",
            choices: ["VIEW PRODUCTS FOR SALE", "VIEW LOW INVENTORY", "ADD TO INVENTORY", "ADD NEW PRODUCT"]
        }])
        .then(function(answer) {

            if (answer.options.toUpperCase() === "VIEW PRODUCTS FOR SALE") {
                connection.query("SELECT id, product_name, price, stock_quantity FROM products", function(err, rows, results) {

                    if (err) throw err;

                    var str = "";
                    for (var i = 0; i < rows.length; i++) {
                        str += rows[i].id + " " + rows[i].product_name + " " + rows[i].price +
                            " " + rows[i].stock_quantity + " \n";
                    }
                    console.log("");
                    console.log(str);
                    connection.end();

                });
            }

            if (answer.options.toUpperCase() === "VIEW LOW INVENTORY") {
                connection.query("SELECT id, product_name, price, stock_quantity FROM products WHERE stock_quantity < 10", function(err, rows, results) {

                    if (err) throw err;

                    var str = "";
                    for (var i = 0; i < rows.length; i++) {
                        str += rows[i].id + " " + rows[i].product_name + " " + rows[i].price +
                            " " + rows[i].stock_quantity + " \n";
                    }
                    console.log("");
                    console.log("We set the limit for 10 items or less.")
                    console.log(str);
                    connection.end();

                });
            }

            if (answer.options.toUpperCase() === "ADD TO INVENTORY") {
                connection.query("SELECT id, product_name, price, stock_quantity FROM products", function(err, rows, results) {

                    if (err) throw err;

                    var str = "";
                    for (var i = 0; i < rows.length; i++) {
                        str += rows[i].id + " " + rows[i].product_name + " " + rows[i].price +
                            " " + rows[i].stock_quantity + " \n";
                    }
                    console.log("");
                    console.log(str);

                });

                inquirer
                    .prompt([{
                            name: "idnumber",
                            type: "input",
                            message: "What product would like to add more of?"
                        },
                        {
                            name: "itemsnumber",
                            type: "input",
                            message: "How many items would you like to add?"
                        }
                    ])
                    .then(function(answer) {

                        var inputID = parseInt(answer.idnumber);
                        var inputItemNumber = parseInt(answer.itemsnumber);

                        connection.query("SELECT id, product_name, price, stock_quantity FROM products WHERE id = " + inputID + " ", function(err, results) {

                            var updateItemNumber = results[0].stock_quantity + inputItemNumber;
                            var prodName = results[0].product_name;

                            connection.query("UPDATE products SET ? WHERE id = " + inputID + " ", [{
                                    stock_quantity: updateItemNumber
                                }],
                                function(error) {
                                    if (error) throw err;
                                    console.log("Update complete!");
                                    connection.end();
                                }
                            );

                            console.log("You added " + inputItemNumber + " items of product number " + inputID + " to the invetory.");
                            console.log("Now you have " + updateItemNumber + " " + prodName + "(s)");

                        });

                    });
            }

            if (answer.options.toUpperCase() === "ADD NEW PRODUCT") {

                inquirer
                    .prompt([{
                            name: "productname",
                            type: "input",
                            message: "What new product would like to add to the inventory?"
                        },
                        {
                            name: "departmentname",
                            type: "input",
                            message: "What department does the product belong to?"
                        },
                        {
                            name: "productprice",
                            type: "input",
                            message: "What is the product price?"
                        },
                        {
                            name: "stocknumber",
                            type: "input",
                            message: "How many items would you like to add to the inventory?"
                        }
                    ])
                    .then(function(answer) {
                        connection.query("INSERT INTO products SET ?", {
                                product_name: answer.productname,
                                department_name: answer.departmentname,
                                price: answer.productprice,
                                stock_quantity: answer.stocknumber
                            },
                            function(err, rows, results) {

                                if (err) throw err;
                                connection.end();

                            }
                        )
                    });
            }
        });
}