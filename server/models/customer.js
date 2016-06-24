// require mongoose
var mongoose = require('mongoose');
// create the schema
// MAKE THIS A NOUN
var CustomerSchema = new mongoose.Schema({
  name: { type: String, required: true},
}, {timestamps: true})
// register the schema as a model
mongoose.model('Customer', CustomerSchema);

// var Customer = mongoose.model('Customer');