const Joi = require("@hapi/joi");

module.exports = {
  
  addNew: {
    body: {
      name: Joi.string().required(),
      price: Joi.string().required(),
      quantity: Joi.number().required(),
      image: Joi.string().required(),
    }
  },

  updateOne: {
    params: {
      id: Joi.string().required()
    },
    body: {
      name: Joi.string().required(),
      price: Joi.string().required(),
      quantity: Joi.number().required(),
      image: Joi.string().required(),
    }
  },

  deleteOne: {
    params: {
      id: Joi.string().required()
    }
  }
}