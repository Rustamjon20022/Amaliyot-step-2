const jwt = require("jsonwebtoken");
const bluebird = require("bluebird");
bluebird.promisifyAll(jwt);
const { ErrorHandler } = require("./../util/error");
const User = require("./model");

module.exports = {

  findAll: async function (req, res, next) {
    try {
      const docs = await User.find({}).exec();
      if(!docs) throw new Error();
      return res.status(200).json(docs);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to get Users"));
    }
  },

  findOne: async function (req, res, next) {
    try {
      const docs = await User.findById(req.params.id).exec();
      if(!docs) throw new Error();
      return res.status(200).json(docs);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to get Products"));
    }
  },

  addNew: async function (req, res, next) {
    try {
      const newUser = new User({
        username: req.body.username,
        password: req.body.password,
        phone: req.body.phone,
        fullname: req.body.fullname,
      });  
      const doc = await newUser.save();
      if(!doc) throw new Error();
      return res.status(200).json(doc);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to add new image"));
    } 
  },

  updateOne: async function (req, res, next) {
    try {
      const doc = await User.findByIdAndUpdate(
        req.params.id,
        req.body
      ).exec();
      if(!doc) throw new Error();
      return res.status(200).json(doc);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to update User"));
    }
  },

  deleteOne: async function (req, res, next) {
    try {
      const doc = await User.findByIdAndDelete(req.params.id).exec();
      if(!doc) throw new Error();
      return res.status(200).json(doc);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to delete User"));
    }
  },
};
