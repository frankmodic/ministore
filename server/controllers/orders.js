var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');


module.exports = {
  show: function(req, res) {
    Order.find({}, function(err, results) {
      if (err){
        console.log('you fucking suck')
      }
      else{
          res.json(results);
      }

    })
  },
    create: function(req, res) {
    if(req.body.name !== undefined || req.body.quantity !== undefined || req.body.product !== undefined){
      console.log('dis be the quantity', req.body.quantity)
       Product.findOne({name: req.body.product.name}, function(err, product){
        if(err){
          var error_msg = {error: "This product doesn't exists"};
          console.log('dis be an order error:', error_msg)
          res.json(error_msg)
        }
        else{
          if(product.quantity < req.body.quantity){
            var prod_msg = {errors: "This product doesn't exists"};
             console.log('dis be a quantity error:', prod_msg)
            res.json(prod_msg)
          }
          else{
              Product.update({name: req.body.product.name}, {$inc: {quantity: -req.body.quantity }}, function(err){
                if(err){
                  console.log('cant decremament')
                }
                else{
                  console.log('whoo, supplies are dwindling')
                }
              })
              console.log('dis be a name bradda ', req.body.name.name);
              var order = new Order({
                name: req.body.name.name, 
                quantity: req.body.quantity, 
                product: req.body.product.name
              });
              order.save(function(err, results) {
                if(err){
                  console.log('Your order wasnt added PUNK')
                }
                else{
                  res.json(results)
                }
              })
          }
        }
      })

    }
    else{
        console.log('yo theres no customer!')
      res.end()
    }

    },

}