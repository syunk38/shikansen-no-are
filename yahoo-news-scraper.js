const client = require('cheerio-httpcli');
const fs = require('fs')

exports.fetchNews = () => {
  const promise = client.fetch('http://yahoo.co.jp')
  promise.then((result) => {
    let news = []
    result.$('.topicsindex .emphasis a').each(function (idx) {
      news.push({
        title: result.$(this).text().replace(/(動画|NEW|写真|写真NEW)/, ''),
        url: result.$(this).attr('href')
      })
    })
    console.log(news)
    fs.writeFile('./news.json', JSON.stringify(news))
  })
}
