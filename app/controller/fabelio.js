const fabelio = require('../service/fabelio')
const database = require('./database')

module.exports.getDetail = async (request, h) => {
  const link = request.payload.link
  const {name, price, description, images} = await fabelio.getDetailInformation(link)
  database.write(link, name,price,description,images)
  return "Link Confirmed"
}

module.exports.getAllProducts = (request,h) => {
  return database.getAllProducts()
}
