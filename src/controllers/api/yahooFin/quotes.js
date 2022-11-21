import axios from 'axios'

const controllersApiMyStocksQuotes = async (req, res) => {
  try {
    const { query: parameters } = req
    console.log('params:', parameters)
    const resp = await axios({
      method: 'GET',
      url: 'https://yh-finance.p.rapidapi.com/market/v2/get-quotes',
      params: parameters,
      headers: {
        'X-RapidAPI-Key': '6013a6fd35mshd8d19441c8b4196p16fa3ajsn6293191261ca',
        'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
      }
    })
    console.log('quote data:', resp.data)
    return res.status(201).json(resp.data)
  } catch (err) {
    return err.response.data
  }
}

export default controllersApiMyStocksQuotes
