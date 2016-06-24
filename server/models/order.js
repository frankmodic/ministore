// require mongoose
var mongoose = require('mongoose');
// create the schema
// MAKE THIS A NOUN
var OrderSchema = new mongoose.Schema({
  name: { type: String, required: true},
  product: { type: String, required: true},
  quantity: { type: Number, min: 1, required: true},
}, {timestamps: true})
// register the schema as a model
var Order = mongoose.model('Order', OrderSchema);