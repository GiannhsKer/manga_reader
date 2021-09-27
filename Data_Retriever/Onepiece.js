// javascript:void(document.oncontextmenu=null);

const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')
const path = require('path')


http = require('http'),
https = require('https');

// import axios from "axios"
// import cheerio from "cheerio"

const link = "https://myonepiecemanga.com/"

const Stream = require('stream').Transform;

const downloadImageToUrl = (url, filename) => {

    var client = http;
    if (url.toString().indexOf("https") === 0){
      client = https;
     }

    client.request(url, function(response) {                                        
      var data = new Stream();                                                    

      response.on('data', function(chunk) {                                       
         data.push(chunk);                                                         
      });                                                                         

      response.on('end', function() {                                             
         fs.writeFileSync(filename, data.read());                               
      });                                                                         
   }).end();
};


const op_volumes = async () => {

    const result = await axios.get(link)
        .then(response => {
            const $ = cheerio.load(response.data);
            //latest = latest chapter
            //vol = volumes / latest chapter
            const latest = $("#ceo_latest_comics_widget-3 > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)")
            const vol = latest.text().slice(-4)
            return vol
        })
        .catch(err => err)

    return result
}

const op_pages = async (volume) => {
    
    const result = await axios.get(link + "manga/one-piece-chapter-" + volume + "/")
        .then(response => {
            const $ = cheerio.load(response.data);
            var images = []            
            var page = $("img")
            for(var i = 0; i < page.length - 1; i++){
                images.push("https:" + page[i].attribs['data-lazy-src'])
            }
            return images
        })
        .catch(err => err)

    return result
}

(async () => {
    // volumes = the latest volume available
    const volumes = await op_volumes()
    // first = the first chapter to start downloading
    const first = 1000
    for(var i = first;i<volumes;i++){

        pages = await op_pages(i)
        if( pages[0] === undefined ){
            continue
        }
        else{
            dir = 'One Piece Volume ' + i.toString()
            fs.mkdir(path.join(__dirname, dir), (err) => {
                if (err) {
                    return console.error(err);
                }
            });
            if(pages[0].search("blogspot")){
                for(var j=0;j<pages.length;j++){
                    downloadImageToUrl(pages[j], dir + "/page" + j.toString() + '.jpg')
                }
            }
            else{
                console.log('no scans for volume : '+ i)
            }
            pages  = []
        }
    }
})()


