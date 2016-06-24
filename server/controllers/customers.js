var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = {
  show: function(req, res) {
    Customer.find({}, function(err, results) {
      if (err){
        console.log('you fucking suck')
      }
      else{
          res.json(results);
      }

    })
  },
    create: function(req, res) {
  			Customer.findOne({name: req.body.name}, function(err, user){
					if(user){
							var error_msg = {error: 'This customer already exists'};
							console.log(error_msg)
							res.json(error_msg)
					}
					else{
							var customer = new Customer({name: req.body.name});
							customer.save(function(err, results){
									if(err) {
											console.log('Customer was not added');
									} else {
											console.log(results);
											res.json(results)
									}
							})
					}
			})
		},

  remove: function(req, res) {
    Customer.remove({_id: req.params.id}, function(err){
      if(err){
        console.log('Yuckin deleted')
      }
      else{
        res.end();
      }

    })
  },
  showOne: function(req, res){
			console.log(req.params)
			Customer.findOne({name: req.params.customername}).populate('_orders').exec(function(err, results){
				if(err){
					console.log('Did not grab one')
				} else {
					res.json(results);
				}
			})
		}
}