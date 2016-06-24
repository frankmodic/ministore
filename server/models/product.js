// require mongoose
var mongoose = require('mongoose');
// create the schema
// MAKE THIS A NOUN
var ProductSchema = new mongoose.Schema({
  name: { type: String, min: 3, required: true},
  img: { type: String, required: true},
  desc: { type: String, max: 200, required: true},
  quantity: { type: Number, min: 1, required: true},
}, {timestamps: true})
// register the schema as a model
var Product = mongoose.model('Product', ProductSchema);