const fabelio = require('./handlers/fabelio')
module.exports = {
  register : (server) => {
    server.route([
      {method : 'POST' , path : '/getDetailInformation' , options: fabelio.getDetail},
      {method : 'GET' , path : '/getAllProducts' , options: fabelio.getAllProducts},
      {method : 'POST' , path : '/getProductDetail' , options: fabelio.getProductDetail},


    ])
},
name : 'api-plugin'
}
