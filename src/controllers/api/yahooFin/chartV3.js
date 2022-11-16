import axios from 'axios'

const controllersApiMyStocksChartV3 = async (req, res) => {
  try {
    // const { params: { interval: time, symbol: ticker, range: duration, region: country, period1: period1, period2: period2, comparisons: compareSymbol, includePrePost: boolean, useYfid: boolean, events: events } } = req
    const resp = await axios({
      method: 'GET',
      url: 'https://yh-finance.p.rapidapi.com/stock/v3/get-chart',
      params: {
        interval: '1mo',
        symbol: 'AMD',
        range: '5y',
        region: 'US',
        includePrePost: 'false',
        useYfid: 'true',
        includeAdjustedClose: 'true',
        events: 'capitalGain,div,split'
      },
      headers: {
        'X-RapidAPI-Key': '3298c261f7msh8b282be2fc60f8ap172f0bjsnae2df1903e8a',
        'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
      }
    })
    console.log(resp.data)
    return res.status(201).json(resp.data)
  } catch (err) {
    return err.response.data
  }
}

export default controllersApiMyStocksChartV3
