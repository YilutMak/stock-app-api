import axios from 'axios'

const controllersApiMyStocksHistoricalData = async (req, res) => {
  try {
    // const { params: {symbol: ticker, region: country } } = req
    const resp = await axios({
      method: 'GET',
      url: 'https://yh-finance.p.rapidapi.com/stock/v3/get-historical-data',
      params: {
        symbol: 'AMD',
        region: 'US'
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

export default controllersApiMyStocksHistoricalData
