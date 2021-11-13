const axios = require('axios')
const cheerio = require('cheerio')


const manga_search = async (search_term) => {

  const url = "https://m.manganelo.com/search/story/" + search_term.replace(/ /g, '_');

  const search_results = await axios(url)
    .then(response => {
      var results = {} // dictionary to be saved in json

      const html = response.data; // html of the requested page
      const $ = cheerio.load(html); // converting html page to object, in order to scrap data

      const mangas = $('.item-img', html); // piece of the html that contains the titles
      const covers = $('.item-img > .img-loading ', html); // piece of the html that contains the covers
      const latest_chapter = $('.item-right > a', html) // piece of the html that contains the latest volume
      const manga_url = $('.search-story-item > a', html) // piece of the html that contains the manga url

      mangas.map(manga =>{
        var title = mangas[manga].attribs.title // manga title
        var cover = covers[manga].attribs.src // image link of the manga cover
        var latest = latest_chapter[manga].attribs.title.replace(/[^0-9]/g,'')
        var author = $('div.search-story-item:nth-child('+ (manga + 1) +') > div:nth-child(2) > span:nth-child(4)',html).text() // author
        var last_update = $('div.search-story-item:nth-child('+ (manga + 1) +') > div:nth-child(2) > span:nth-child(5)',html).text().slice(10) // latest update
        var page = manga_url[manga].attribs.href // manga url 

        results[title] = {"Cover" : cover,"Latest" : latest, "Author": author, "Latest Update" : last_update,"Manga Page" : page}
      })
      return results
    })
    .catch(err => err);
    return search_results
}

const pages_fetch = async (url) => {

  const pages = await axios(url)
    .then(response => {
      
      const html = response.data; // html of the requested page
      const $ = cheerio.load(html); // converting html page to object, in order to scrap data

      const pages_html = $('.container-chapter-reader > img', html); // piece of the html that contains pages links
      var pages = [] // pages links

      pages_html.map(page =>{
        pages.push(pages_html[page].attribs.src)
      })

      return pages
    })
    .catch(err => err);
  return pages
}

(async () => {

  // FETCH SEARCH RESULTS

  // const search_term = "berserk" // user input

  // const search_result = await manga_search(search_term) // fetches dictionary with results
  // console.log(await manga_search(search_term))

  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  // FETCH PAGES

  // const volume = 1 // volume to fetch (e.g. 15)
  
  // manga_url = search_result['Berserk']['Manga Page'] + '/chapter-' + volume // link of the manga

  // const pages = await pages_fetch(manga_url)

  // console.log(pages)

})()
