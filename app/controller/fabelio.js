const fabelio = require('../service/fabelio')
const database = require('./database')

module.exports.getDetail = async (request, h) => {
  const link = request.payload.link
  const {name, price, description, images} = await fabelio.getDetailInformation(link)
  changeValuePerHour(link)
  database.write(link, name,price,description,images)
  return "Link Confirmed"
}

module.exports.getAllProducts = (request,h) => {
  return database.getAllProducts()
}
module.exports.getProductDetail = (request,h) => {
  const link = request.payload.link
  return database.getProductDetail(link)
}

async function changeValuePerHour(link) {
  const ONEHOUR = 60 * 60 * 1000; // 60 minutes
    setInterval( async() => {
    const price = await fabelio.getPriceBaseOnLink(link)
    return database.changePriceValuePerLink(link, price)
  },ONEHOUR)
}
