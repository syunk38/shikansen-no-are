const { app, Tray, Menu, shell } = require('electron')
const fs = require('fs')
const path = require('path')
const _  = require('lodash')
const { fetchNews } = require('./yahoo-news-scraper')

fetchNews()
setInterval(fetchNews, 1000 * 60 * 5)

let news = JSON.parse(fs.readFileSync('./news.json', {encoding: 'utf-8'}));

const contextMenu = Menu.buildFromTemplate(
                      news.reduce((arr, n) => {
                        arr.push({ label: n.title, click: () => {
                          shell.openExternal(n.url)
                        }})
                        return arr
                      }, [])
                    )

app.on('ready', function() {
  const tray = new Tray(path.join(__dirname,'icon.png'))
  let letterCount = 0
  let newsCount = 0
  const displayLimit = 15
  setInterval(() => {
    const title = news[newsCount].title
    const limit = title.length + displayLimit
    const displayTitle = _.pad(title, title.length + displayLimit * 2, "　")
    tray.setTitle(displayTitle.slice(letterCount, displayLimit + letterCount))
    letterCount++
    if(letterCount === title.length + displayLimit){
      letterCount = 0
      newsCount++
    }
    if(newsCount === news.length) {
      newsCount = 0
    }
  }, 300)
  tray.setContextMenu(contextMenu)
});
