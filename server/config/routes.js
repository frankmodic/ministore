  // This is our routes.js file located in server/config/routes.js
  // This is where we will define all of our routing rules!
  // We will have to require this in the server.js file (and pass it app!)
  var customers = require('./../controllers/customers.js');
  var orders = require('./../controllers/orders.js');
  var products = require('./../controllers/products.js');
  
  module.exports = function(app) {
  // verb: get, plural of target as the URI is the RESTful index method (it returns all customers)
  	app.get('/customers', function(req, res) {
  	  customers.show(req, res);
  	})
    app.post('/customers', function(req, res) {
      customers.create(req, res);
    })
    app.delete('/customers/:id', function(req, res) {
      customers.remove(req, res);
    })

    app.get('/orders', function(req, res){
      orders.show(req, res);
    })

    app.post('/orders', function(req, res) {
      orders.create(req, res);
    })

    app.get('/products', function(req, res){
      products.show(req, res);
    })

    app.post('/products', function(req, res) {
      products.create(req, res);
    })


  };