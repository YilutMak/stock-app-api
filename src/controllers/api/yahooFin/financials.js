import axios from 'axios'

const controllersApiMyStocksFinancials = async (req, res) => {
  try {
    // const { params: { symbol: ticker, region: country } } = req
    const resp = await axios({
      method: 'GET',
      url: 'https://yh-finance.p.rapidapi.com/stock/v2/get-financials',
      params: { symbol: 'AMD', region: 'US' },
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

export default controllersApiMyStocksFinancials
