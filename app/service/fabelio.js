const puppeteer = require('puppeteer');

async function createBrowser() {
  const puppeteer_options = {launch: {
    headless: true,
    slowMo: 50,
    args: [
      '--no-sandbox',
      '--disable-web-security',
      '--disable-features=site-per-process',
      '--ignore-certificate-errors',
      '--incognito',
    ]
  },
  viewport: {
    width: 1400,
    height: 750,
  }}
  const browser = await puppeteer.launch(puppeteer_options.launch);
  const pages = await browser.pages();
  const page = pages[0];
  await page.setViewport(puppeteer_options.viewport);
  page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.109 Safari/537.36');
  return {
    page,
    browser,
  };
}


module.exports.getDetailInformation = async (link) => {
  const {page,browser} = await createBrowser()
  await page.goto(link)
  const name = await getName(page)
  const price = await getPrice(page)
  const images = await getImages(page)
  await browser.close()
  return{
    name,
    price,
    images
  }


}

async function getName(page) {
  await page.waitForSelector('.base')
  return await page.evaluate(() => {
    return document.querySelector('.base').textContent
  })
}

async function getPrice(page) {
  await page.waitForSelector('.price')
  return await page.evaluate(() => {
    return document.querySelector('.price').textContent
  })
}


async function getImages(page) {

  await page.waitForSelector('.fotorama__nav__frame.fotorama__nav__frame--thumb img')
  return await page.evaluate(() => {
    const images = []
    const $images = document.querySelectorAll('.fotorama__nav__frame.fotorama__nav__frame--thumb img')
    for(let i =0,n = $images.length;i<n;i++){
      images.push($images[i].src)
    }
    return images
  })
}

module.exports.getPriceBaseOnLink = async (link) => {
  const response = await get(link)
  const $ = cheerio.load(response.body)
  return getPrice($)
}
