# Bamazon

Bamazon is an Amazon-like storefront built with MySQL and Node js. The app will take in orders from customers and deplete stock from the store's inventory.

Challenge #1: Customer View 

We started with creating a MySQL Database called bamazon_DB that contains a table called products. The table has the following colomns:

* id (unique id for each product)
* product_name (Name of product)
* department_name
* price (cost to customer)
* stock_quantity (how much of the product is available in stores)

We populated this database with 10 different products. Then we created a Node application called bamazonCustomer.js. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale. Then, the app prompts the user with two messages. The first asks them the ID of the product they would like to buy. The second message asks how many units of the product they would like to buy. Once the customer has placed the order, the application checks if your store has enough of the specified product to meet the customer's request. If not, the app should logs the message: Insufficient quantity! and prevents the order from going through. However, if the store does have enough of the product, you fulfills the customer's order. This means updating the SQL database to reflect the remaining quantity. Once the update goes through, show the customer the total cost of their purchase.

These are the steps necessary to run the app and pictures to demonstrate the running app.

* The original populated database showing products table:![Original table](https://github.com/gelutzu/Bamazon/blob/master/initialDB.JPG)
* The execution of the app:![Execution](https://github.com/gelutzu/Bamazon/blob/master/execution.JPG)
* The update in the database: ![Update](https://github.com/gelutzu/Bamazon/blob/master/stockUpdate.JPG)
* The insufficient warning message:![Insufficient](https://github.com/gelutzu/Bamazon/blob/master/insufficient.JPG)

Challenge #2: Manager View

We created a new Node application called bamazonManager.js. Running this application will list a set of menu options:
* View Products for Sale
* View Low Inventory
* Add to Inventory
* Add New Product
If a manager selects View Products for Sale, the app should list every available item: the item IDs, names, prices, and quantities. If a manager selects View Low Inventory, then it should list all items with an inventory count lower than five. If a manager selects Add to Inventory, your app should display a prompt that will let the manager "add more" of any item currently in the store. If a manager selects Add New Product, it should allow the manager to add a completely new product to the store.

Here is a collection of pictures demonstrating each available option fro the menu:
* View products: ![Original table](https://github.com/gelutzu/Bamazon/blob/master/managerView.PNG)
* View low inventory:![Low Inventory](https://github.com/gelutzu/Bamazon/blob/master/managerLowInv.PNG)
* Add to inventory: ![Add to inventory](https://github.com/gelutzu/Bamazon/blob/master/managerAdd.PNG)
* Add new product:![Add new product1](https://github.com/gelutzu/Bamazon/blob/master/managerNew.PNG) 
![Add new product2](https://github.com/gelutzu/Bamazon/blob/master/managerNew2.PNG) 