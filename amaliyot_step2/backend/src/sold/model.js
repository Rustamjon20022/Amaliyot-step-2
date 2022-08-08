const mongoose = require("mongoose");
const normalize = require("normalize-mongoose");

const soldSchema = new mongoose.Schema(
  {
    name: { type: String },
    price: { type: String },
    quantity: { type: Number },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

soldSchema.plugin(normalize);
module.exports = mongoose.model("sold", soldSchema);
