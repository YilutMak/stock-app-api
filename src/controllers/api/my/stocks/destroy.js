import prisma from '../../../_helpers/prisma.js'
import handleErrors from '../../../_helpers/handle-errors.js'
import checkOwnership from './_check-ownership.js'

const controllersApiStockssDestroy = async (req, res) => {
  try {
    const { params: { id } } = req
    const deletedStocks = await prisma.stocks.delete({ where: { id: Number(id) } })
    return res.status(200).json(deletedStocks)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default [
  checkOwnership,
  controllersApiStockssDestroy
]
