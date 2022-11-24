import yup from 'yup'

import prisma from '../../../_helpers/prisma.js'
import handleErrors from '../../../_helpers/handle-errors.js'

const createSchema = yup.object({
  symbol: yup.string().required()
})

const controllersApiMyStocksCreate = async (req, res) => {
  console.log(req.body)

  try {
    const { body: symbol, session: { user: { id: userId } } } = req
    const verifiedData = await createSchema.validate(symbol, { abortEarly: false, stripUnknown: true })
    const newStock = await prisma.stocks.create({ data: { ...verifiedData, userId } })
    return res.status(201).json(newStock)
  } catch (err) {
    console.error(err)
    return handleErrors(res, err)
  }
}

export default controllersApiMyStocksCreate
