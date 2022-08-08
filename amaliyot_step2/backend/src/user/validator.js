const Joi = require("@hapi/joi");

module.exports = {
  
  addNew: {
    body: {
      username: Joi.string().max(1000).required(),
      password: Joi.string().required(),
      phone: Joi.string().required(),
      fullname: Joi.string().max(1000).required(),
    }
  },

  updateOne: {
    params: {
      id: Joi.string().required()
    },
    body: {
      username: Joi.string().max(1000).required(),
      password: Joi.string().required(),
      phone: Joi.string().required(),
      fullname: Joi.string().max(1000).required(),
    }
  },

  deleteOne: {
    params: {
      id: Joi.string().required()
    }
  }
}