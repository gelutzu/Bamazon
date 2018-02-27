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

// connect to the mysql server and sql database
connection.query("SELECT id, product_name, price FROM products", function(err, rows, results) {

  if(err) throw err;

  var str = "";
    for (var i = 0; i < rows.length; i++) {
        str += rows[i].id +  " " + rows[i].product_name + " " + rows[i].price + " \n";
    }
    console.log("");
    console.log(str);
    start();  
});

function start() {
    
    inquirer
      .prompt([{
        name: "idnumber",
        type: "input",
        message: "What is the ID of the product you would like to buy?"
        },
        {
          name: "itemsnumber",
          type: "input",
          message: "How mamy items would you like to buy?"
        }
      ])
      .then(function(answer) {

       var inputID = parseInt(answer.idnumber);
       var inputItemNumber = parseInt(answer.itemsnumber);

       connection.query("SELECT price FROM products WHERE id = " + inputID + " ", function(err, results) {

         var itemPrice = parseFloat(results[0].price);

       connection.query("SELECT stock_quantity FROM products WHERE id = " + inputID + " ", function(err, results) {

        if (err) throw err;

        if(inputItemNumber > results[0].stock_quantity) {
            console.log("Insufficient quantity!");
            connection.end();
        } 
        else {
            var updateItemNumber = results[0].stock_quantity - inputItemNumber;
           
            connection.query(
                "UPDATE products SET ? WHERE id = " + inputID + " ",
                [
                  {
                    stock_quantity: updateItemNumber
                  }
                ],
                function(error) {
                  if (error) throw err;
                  console.log("Update completed!");
                  connection.end();
                }
              );

        }
      });
      if(inputItemNumber < results[0].stock_quantity) {
        console.log("You purchased " + inputItemNumber + " items of product number " + inputID);
        //console.log(inputItemNumber);
        //console.log(itemPrice);
        console.log("Your total cost id: " + parseFloat((inputItemNumber * itemPrice).toFixed(2))) ;
      }

      });
    });
}