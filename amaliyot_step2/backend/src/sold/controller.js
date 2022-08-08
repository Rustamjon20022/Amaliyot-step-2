const { ErrorHandler } = require("../util/error");
const Sold = require("./model");

module.exports = {

  findAll: async function (req, res, next) {
    try {
      const docs = await Sold.find({}).exec();
      if(!docs) throw new Error();
      return res.status(200).json(docs);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to get Solds"));
    }
  },

  findOne: async function (req, res, next) {
    try {
      const docs = await Sold.findById(req.params.id).exec();
      if(!docs) throw new Error();
      return res.status(200).json(docs);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to get Products"));
    }
  },

  addNew: async function (req, res, next) {
    try {
      
      const doc = await Sold.insertMany(req.body)
      
      if(!doc) throw new Error();
      return res.status(200).json(doc);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to add new image"));
    } 
  },

  updateOne: async function (req, res, next) {
    try {
      const doc = await Sold.findByIdAndUpdate(
        req.params.id,
        req.body
      ).exec();
      if(!doc) throw new Error();
      return res.status(200).json(doc);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to update Sold"));
    }
  },

  deleteOne: async function (req, res, next) {
    try {
      const doc = await Sold.findByIdAndDelete(req.params.id).exec();
      if(!doc) throw new Error();
      return res.status(200).json(doc);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to delete Sold"));
    }
  },
};
