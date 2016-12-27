const client = require('cheerio-httpcli');
const fs = require('fs')

const fetchNews = () => {
  const promise = client.fetch('http://yahoo.co.jp')
  const ret = promise.then((result) => {
    result.$('.topicsindex .emphasis a').each((idx) => {
      console.log(this)
      news.push({
        title: result.$(this).text(),
        url: result.$(this).attr('href')
      })
    })
    console.log(news)
  })
}


exports.getNews = () => {
  fetchNews()
  return [
    {title:"辺野古 承認取り消しを撤回", url:"http://rdsig.yahoo.co.jp/_ylt=A2RADHu6smBYHAcAIeOJBtF7/RV=2/RE=1482818618/RH=cmRzaWcueWFob28uY28uanA-/RB=EBnS2PzAIa.Su6gaxgXPI..93u4-/RU=aHR0cDovL25ld3MueWFob28uY28uanAvcGlja3VwLzYyMjUzNDAA/RK=0/RS=Bg.acUF8_0EJlhCdDDtMQ9IJUHo-"},
    {title:"真珠湾通告遅れ 通説覆す新説", url:"http://rdsig.yahoo.co.jp/_ylt=A2RADHu6smBYHAcAIuOJBtF7/RV=2/RE=1482818618/RH=cmRzaWcueWFob28uY28uanA-/RB=EBnS2PzAIa.Su6gaxgXPI..93u4-/RU=aHR0cDovL25ld3MueWFob28uY28uanAvcGlja3VwLzYyMjUzMTkA/RK=0/RS=gy9U1klDx_VC3Vm__YWlefSodmI-"},
    {title:"誘致せず五輪費負担 札幌反発", url:"http://rdsig.yahoo.co.jp/_ylt=A2RADHu6smBYHAcAI.OJBtF7/RV=2/RE=1482818618/RH=cmRzaWcueWFob28uY28uanA-/RB=EBnS2PzAIa.Su6gaxgXPI..93u4-/RU=aHR0cDovL25ld3MueWFob28uY28uanAvcGlja3VwLzYyMjUzMzUA/RK=0/RS=L0cxAH4z2pzt2TidQOcz4JWfXGs-"},
    {title:"賭けマージャン市長 辞職言及", url:"http://rdsig.yahoo.co.jp/_ylt=A2RADHu6smBYHAcAJOOJBtF7/RV=2/RE=1482818618/RH=cmRzaWcueWFob28uY28uanA-/RB=EBnS2PzAIa.Su6gaxgXPI..93u4-/RU=aHR0cDovL25ld3MueWFob28uY28uanAvcGlja3VwLzYyMjUzNDUA/RK=0/RS=0qoJPlpZFt1SvYUBkQbBlmrC4dM-"},
    {title:"雑誌が書籍下回る 41年ぶり", url:"http://rdsig.yahoo.co.jp/_ylt=A2RADHu6smBYHAcAJeOJBtF7/RV=2/RE=1482818618/RH=cmRzaWcueWFob28uY28uanA-/RB=EBnS2PzAIa.Su6gaxgXPI..93u4-/RU=aHR0cDovL25ld3MueWFob28uY28uanAvcGlja3VwLzYyMjUzMzYA/RK=0/RS=0VOb9SDtD.I4omXinYaB_ggKAnU-"},
    {title:"真央 貫く競技者のプライド", url:"http://rdsig.yahoo.co.jp/_ylt=A2RADHu6smBYHAcAJuOJBtF7/RV=2/RE=1482818618/RH=cmRzaWcueWFob28uY28uanA-/RB=EBnS2PzAIa.Su6gaxgXPI..93u4-/RU=aHR0cDovL25ld3MueWFob28uY28uanAvcGlja3VwLzYyMjUzMzkA/RK=0/RS=R0pzeimSWjJmE45dpOuIlZI04wc-"},
    {title:"ベイダー 余命2年宣告明かす", url:"http://rdsig.yahoo.co.jp/_ylt=A2RADHu6smBYHAcAJ.OJBtF7/RV=2/RE=1482818618/RH=cmRzaWcueWFob28uY28uanA-/RB=EBnS2PzAIa.Su6gaxgXPI..93u4-/RU=aHR0cDovL25ld3MueWFob28uY28uanAvcGlja3VwLzYyMjUzNDQA/RK=0/RS=huXclkRX_f6.jhJXnZwnAnVUp9A-"},
    {title:"紅白でSMAP色排除 NHK明言", url:"http://rdsig.yahoo.co.jp/_ylt=A2RADHu6smBYHAcAKOOJBtF7/RV=2/RE=1482818618/RH=cmRzaWcueWFob28uY28uanA-/RB=EBnS2PzAIa.Su6gaxgXPI..93u4-/RU=aHR0cDovL25ld3MueWFob28uY28uanAvcGlja3VwLzYyMjUzMzcA/RK=0/RS=QmDb77ybWufRG9WeqDOzvawGy3s-"}
  ]
}
