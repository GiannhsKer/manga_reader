const axios = require('axios')
const cheerio = require('cheerio')

// import axios from 'axios'
// import cheerio from 'cheerio'

const scrap_it = async (title) => {

  const url = "https://m.manganelo.com/search/story/" + title.replace(/ /g, '_');

  const result = await axios(url)
    .then(response => {
      let final = {}, titles = [], covers_urls = [], title
      const html = response.data;
      const $ = cheerio.load(html);

      const mangas = $('.item-img', html);
      const covers = $('.item-img > .img-loading ', html);

      for (let i = 0; i < mangas.length; i++) {
        titles.push($(mangas)[i].attribs.title);
        covers_urls.push($(covers)[i].attribs.src);
        title = titles[i]
        final[title] = covers_urls[i]
      }
      return final
    })
    .catch(err => err);
  return result
}

(async () => {
  console.log(await scrap_it("one piece"))
})()
