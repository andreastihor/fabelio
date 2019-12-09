const database_products = require('../../database/products')


module.exports.write = (link, name,price,description,images) => {
  //write function to database
  database_products.products.push({
    link,
    name,
    price,
    description,
    images,
  })
  return database_products
}

module.exports.getAllProducts = () => {
  return database_products.products
}
