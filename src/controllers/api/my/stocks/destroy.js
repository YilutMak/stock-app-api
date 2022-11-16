import prisma from '../../../_helpers/prisma.js'
import handleErrors from '../../../_helpers/handle-errors.js'
import checkOwnership from './_check-ownership.js'

const controllersApiStocksDestroy = async (req, res) => {
  try {
    const { params: { id } } = req
    const deletedWishlist = await prisma.wishlist.delete({ where: { id: Number(id) } })
    return res.status(200).json(deletedWishlist)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default [
  checkOwnership,
  controllersApiStocksDestroy
]
