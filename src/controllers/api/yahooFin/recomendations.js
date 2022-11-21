import axios from 'axios'

const controllersApiMyStocksRecomendations = async (req, res) => {
  try {
    const { query: symbol } = req
    console.log(symbol)
    const resp = await axios({
      method: 'GET',
      url: 'https://yh-finance.p.rapidapi.com/stock/v2/get-recommendations',
      params: symbol,
      headers: {
        'X-RapidAPI-Key': '6013a6fd35mshd8d19441c8b4196p16fa3ajsn6293191261ca',
        'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
      }
    })
    console.log('recommend data:', resp.data)
    return res.status(201).json(resp.data)
  } catch (err) {
    return err.response.data
  }
}

export default controllersApiMyStocksRecomendations
