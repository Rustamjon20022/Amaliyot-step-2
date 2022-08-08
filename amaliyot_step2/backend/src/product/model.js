const mongoose = require("mongoose");
const normalize = require("normalize-mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String },
    price: { type: String },
    quantity: { type: Number },
    unity: { type: String },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

productSchema.plugin(normalize);
module.exports = mongoose.model("product", productSchema);
