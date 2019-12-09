const fabelio = require('./handlers/fabelio')
module.exports = {
  register : (server) => {
    server.route([
      {method : 'POST' , path : '/getDetailInformation' , options: fabelio.getDetail},
      {method : 'GET' , path : '/getAllProducts' , options: fabelio.getAllProducts},


    ])
},
name : 'api-plugin'
}
