import axios from 'axios'

const controllersApiMyStocksSpark = async (req, res) => {
  try {
    const { query: parameters } = req
    // console.log('params:', parameters)
    const resp = await axios({
      method: 'GET',
      url: 'https://yh-finance.p.rapidapi.com/market/get-spark',
      params: parameters,
      headers: {
        'X-RapidAPI-Key': '0244c9b7a1mshd9fd55acbf01841p19a070jsn21d39fe1b23a',
        'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
      }
    })
    console.log('spark data:', resp.data)
    return res.status(201).json(resp.data)
  } catch (err) {
    console.log('spark data:', err.response.data)
    return err.response.data
  }
}

export default controllersApiMyStocksSpark
