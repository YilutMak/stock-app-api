import axios from 'axios'

const controllersApiMyStocksSummary = async (req, res) => {
  try {
    const { query: parameters } = req
    console.log('parameters:', parameters)

    const resp = await axios({
      method: 'GET',
      url: 'https://yh-finance.p.rapidapi.com/stock/v2/get-summary',
      params: parameters,
      headers: {
        'X-RapidAPI-Key': 'c4cdbbec9amshccc3804d05f4de5p15652bjsn1dc0afd1c23a',
        'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
      }
    })
    console.log(resp.data)
    return res.status(201).json(resp.data)
  } catch (err) {
    return err.response.data
  }
}

export default controllersApiMyStocksSummary
