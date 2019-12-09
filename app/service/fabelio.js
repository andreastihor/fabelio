const request = require('request').defaults({
  headers: {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ' +
                  'AppleWebKit/537.36 (KHTML, like Gecko) ' +
                  'Chrome/63.0.3239.84 ' +
                  'Safari/537.36',
  }
})
const Promise = require('bluebird')
const cheerio = require('cheerio')
const get = Promise.promisify(request.get)
const fs = require('fs')



module.exports.getDetailInformation = async (link) => {
  const response = await get(link)
  const $ = cheerio.load(response.body)
  fs.writeFileSync('test.html',response.body)
  const name = $('.base').text()
  const price = $('.price').text()
  const description = getDescription($)
  //still not working
  const images = getImages($)

  return{
    name,
    price,
    description,
    images
  }


}

function getDescription($) {
  const $p = $('#additional-data .data p')
  const dimensi = $($p[0]).text()
  const material = $($p[2]).text().replace(/-/g,'\n').trim()

  const $ul = $('#additional-data .data ul')
  const instruksi_perawatan = []
  const $instruksi = $($ul[0]).find('li')
  $instruksi.each((idx, el) => {
    instruksi_perawatan.push($(el).text())
  })

  const pengiriman_pengembalian = {}
  const $pengiriman = $($ul[1]).find('li')
  pengiriman_pengembalian['pengembalian_produk'] = $($pengiriman[0]).text().substring(19)
  pengiriman_pengembalian['pengembalian_dana'] = $($pengiriman[1]).text().substring(17)
  return {
    dimensi,
    material,
    instruksi_perawatan,
    pengiriman_pengembalian,
  }
}

function getImages($) {
  const $images = $('.fotorama__nav__frame.fotorama__nav__frame--thumb img')
  const images = []
  return images
}
