// Scrapper version which returns multiple volumes and saves them to a json file

const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs');


const url = "https://1piecemanga.com/"
const path = '../Data/OnePiece1.json'


const op_volumes = async () => {

    const volumes = await axios(url)
        .then(response => {
            const $ = cheerio.load(response.data);
            const latest = $("#ceo_latest_comics_widget-3 > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)") // latest chapter
            const vol = latest.text().slice(-4) // number of volumes
            return vol
        })
        .catch(err => err)

    return volumes
}

const op_pages = async (volume) => {
    
    const result = await axios(link + "manga/one-piece-chapter-" + volume + "/")
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

  const first_volume = 300 //the first volume to start downloading
  // const latest_volume = await op_volumes() // latest volume
  const latest_volume = 301 // latest volume

  fs.readFile(path, 'utf8' , (err, data) => { // reading what the json file already contains
      if (err) {
        console.error(err)
      }
      else{
        op_mangas = JSON.parse(data)
      }
    })

    for(i = first_volume; i < latest_volume ;i++){

      // OPTIMIZATION TASK = It would be faster if we first check if the volume exists in data, and then make the request, but it work work.

      const pages = await op_pages(i).catch(err=>console.log(err)) // requests website for pages links

      if( pages[0] === undefined || pages[0].indexOf("undefined") !== -1){ // checks if the page link is valid, images are not corrupt, etc.
        console.log('no scans for volume : '+ i)                    
      }
      else{
        if( i in op_mangas["One Piece"]){
          console.log("volume " + i + " already there!")  // statement is true, no need to write, this volume is already saved 
        }
        else{
          console.log('writing volume : ' + i)  // statement is false, need to write data to json
          op_mangas['One Piece'][i] = pages

        }
      }
    }

  const data = JSON.stringify(op_mangas,null,2); //convert it back to json

  fs.writeFile(path, data, (err) => {console.log(err) })

})()