const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs');


const link = "https://myonepiecemanga.com/"


const op_volumes = async () => {

    const volumes = await axios.get(link)
        .then(response => {
            const $ = cheerio.load(response.data);
            //latest = latest chapter
            //vol = volumes / latest chapter
            const latest = $("#ceo_latest_comics_widget-3 > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)")
            const vol = latest.text().slice(-4)
            return vol
        })
        .catch(err => err)

    return volumes
}

const op_pages = async (volume) => {
    
    const result = await axios.get(link + "manga/one-piece-chapter-" + volume + "/")
        .then(response => {
            const $ = cheerio.load(response.data);
            images = []            
            page = $("img")
            for(var i = 0; i < page.length - 1; i++){
                images.push("https:" + page[i].attribs['data-lazy-src'])
            }
            return images
        })
        .catch(err => err)

    return result
}

(async () => {
    //the first volume to start downloading
    const first_volume = 970
    const latest_volume = await op_volumes()
    op_mangas = {'Mangas': {'One Piece': {}}}

    for(i = first_volume; i < latest_volume ;i++){
        const pages = await op_pages(i).catch(err=>console.log(err))

        if( pages[0] === undefined || pages[0].indexOf("undefined") !== -1){    
            console.log('no scans for volume : '+ i)                    
        }
        else{
            console.log('volume : '+ i)                    
            // op_mangas['One Piece'][i] = pages
            op_mangas['Mangas']['One Piece'][i] = pages
        }
            
    }
    const data = JSON.stringify(op_mangas,null,2);

    fs.writeFile("../Data/Mangas.json", data, (err) => {console.log(err) })
})()