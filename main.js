const { getNews } = require('./yahoo-news-scraper')
const { app, Tray, Menu, shell, BrowserWindow } = require('electron')
// const BrowserWindow = require('browser-window')
const path = require('path')

const news = getNews()

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
  tray.setTitle('紅白でSMAP色排除 NHK明言')
  tray.window = new BrowserWindow({width:500, height: 500, show: false})
  setTimeout(() => {
    // tray.setTitle('しばらくおまちください')
  }, 1000)
  tray.setContextMenu(contextMenu)
});
