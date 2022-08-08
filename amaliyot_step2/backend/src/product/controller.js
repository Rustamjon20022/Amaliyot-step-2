const { ErrorHandler } = require("../util/error");
const Product = require("./model");

module.exports = {

  findAll: async function (req, res, next) {
    try {
      const docs = await Product.find({}).exec();
      if(!docs) throw new Error();
      return res.status(200).json(docs);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to get Products"));
    }
  },

  findOne: async function (req, res, next) {
    try {
      const docs = await Product.findById(req.params.id).exec();
      if(!docs) throw new Error();
      return res.status(200).json(docs);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to get Products"));
    }
  },

  addNew: async function (req, res, next) {
    try {
      const newProduct = new Product({
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
        unity: req.body.unity,
        image: req.body.image,
      });  
      const doc = await newProduct.save();
      if(!doc) throw new Error();
      return res.status(200).json(doc);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to add new image"));
    } 
  },

  updateOne: async function (req, res, next) {
    try {
      const doc = await Product.findByIdAndUpdate(
        req.params.id,
        req.body
      ).exec();
      if(!doc) throw new Error();
      return res.status(200).json(doc);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to update Product"));
    }
  },

  updateQuantity: async function (req, res, next) {
    try {
      const doc = await Product.findByIdAndUpdate(
        req.params.id,
        { $inc : { "quantity" : -(req.body.quantity) } }
      ).exec();
      if(!doc) throw new Error();
      return res.status(200).json(doc);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to update Product"));
    }
  },

  deleteOne: async function (req, res, next) {
    try {
      const doc = await Product.findByIdAndDelete(req.params.id).exec();
      if(!doc) throw new Error();
      return res.status(200).json(doc);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to delete Product"));
    }
  },
};
