const database_products = require('../../database/products')


module.exports.write = (link, name,price,description,images) => {
  const object = {}
  object[link] = {
    name,
    price,
    description,
    images,
  }
  //write function to database
  database_products.products.push(object)
  return database_products
}

module.exports.getAllProducts = () => {
  return database_products.products
}

module.exports.changePriceValuePerLink = (link, price) => {
  const tempObject = database_products.products
  tempObject[link].price = price
  return 
}
