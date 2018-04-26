var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,


    user: "root",


    password: "N9ahbear",
    database: "bamazon_DB"
});

var total =0;
var selection;

connection.connect(function (err) {
    if (err) throw err;

    bamazon();
});

function bamazon() {
    listProducts();
    makePurchase();


}
function listProducts() {
    console.log("Here are the available items to purchase\n");
    var query = connection.query(
        "SELECT * FROM products",
        function (err, res) {
            for (i in res) {
                console.log(res[i].name +" $"+ res[i].price + " product id: " + res[i].id);
                
            }
        }
    );
}

function makePurchase(){
    inquirer
                .prompt([
                    {
                        type: "input",
                        name: "purchase",
                        message: "What would you like to buy? Please use prucuct id.",
                        

                    },
                    {
                        type: "confirm",
                        name: "finished",
                        message: "does that complete your order?"

                    }
                ])
                .then(function (response) {
                    selection = response.purchase
                    var query = connection.query(
                        "UPDATE products SET ? WHERE ?",
                        [
                          {
                            stock: stock-1
                          },
                          {
                            id: selection
                          }
                        ],
                        function(err, res) {
                          console.log(res.affectedRows + " products updated!\n");
                          
                         
                        }
                      );
                    
                    if(res.finished===true){
                        
                    }


                })

}