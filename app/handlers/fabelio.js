const fabelio = require('../controller/fabelio')
const Joi = require('joi')

module.exports = {
  getDetail : {
    handler : fabelio.getDetail,
    validate : {
      payload : {
        link : Joi.string().required()
      }
    }
  },
  getAllProducts : {
    handler : fabelio.getAllProducts,
  },
  getProductDetail : {
    handler : fabelio.getProductDetail,
  },

}
