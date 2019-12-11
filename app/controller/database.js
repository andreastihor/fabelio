const database_products = require('../../database/products')
const moment_timezone = require('moment-timezone')

module.exports.write = (link, name,price,description,images) => {
  const object = {}
  //write function to database
  database_products.products.push({
    link,
    name,
    price,
    description,
    images,
    priceHistory : []
  })
  return database_products
}

module.exports.getAllProducts = () => {
  return database_products.products
}

module.exports.changePriceValuePerLink = (link, price) => {

  for(let i =0, n = database_products.products.length; i<n; i++) {
    const tempObject = database_products.products[i]
    if (tempObject.link == link) {
      const prevPrice = tempObject.price
      const time = moment_timezone().tz('Jakarta')
      tempObject.priceHistory.push({
        time,
        prevPrice,
      })
      tempObject.price = price
      break
    }
  }
  return
}

module.exports.getProductDetail = (link) => {
  for(let i =0, n = database_products.products.length; i<n; i++) {
    const tempObject = database_products.products[i]
    if (tempObject.link == link) {
      return tempObject
  }
  }
}
