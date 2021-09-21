// https://w11.read-onepiece.com/manga/one-piece-chapter-992/
// javascript:void(document.oncontextmenu=null);

// const axios = require('axios')
// const cheerio = require('cheerio')

import axios from "axios"
import cheerio from "cheerio"

const link = "https://w11.read-onepiece.com/"

export const onepiece = async () => {

    const result = await axios.get(link)
        .then(response => {
            const $ = cheerio.load(response.data);
            const title = $(".entry-title").text()
            //lc = latest chapter
            //vol = volumes / latest chapter
            const lc = $("#ceo_latest_comics_widget-3 > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)")
            const vol = lc.text().substring(18).replace(/ /, "")
            return [title, vol]
        })
        .catch(err => err)

    return result
}

// (async () => {
//     console.log(await onepiece())
// })()
