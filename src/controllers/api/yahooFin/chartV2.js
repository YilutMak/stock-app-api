import axios from 'axios'

const controllersApiMyStocksChartV2 = async (req, res) => {
  try {
    // const { params: { interval: time, symbol: ticker, range: duration, region: country, period1: period1, period2: period2 } } = req
    const resp = await axios({
      method: 'GET',
      url: 'https://yh-finance.p.rapidapi.com/stock/v2/get-chart',
      params: { interval: '5m', symbol: 'AMD', range: '1d', region: 'US' },
      headers: {
        'X-RapidAPI-Key': '0244c9b7a1mshd9fd55acbf01841p19a070jsn21d39fe1b23a',
        'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
      }
    })
    console.log(resp.data)
    return res.status(201).json(resp.data)
  } catch (err) {
    return err.response.data
  }
}

export default controllersApiMyStocksChartV2
