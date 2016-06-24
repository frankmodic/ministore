var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = {
  show: function(req, res) {

    Product.find({}, function(err, results) {
      if (err){
        console.log('you fucking suck')
      }
      else{
          res.json(results);
      }

    })
  },
      create: function(req, res) {
        var product = new Product({
          name: req.body.name, 
          img: req.body.img, 
          desc: req.body.desc,
          quantity: req.body.quantity
        });
      product.save(function(err, results) {
        if(err){
          console.log('Your product wasnt added PUNK')
        }
        else{
          res.json(results)
        }
      })
    },
  }