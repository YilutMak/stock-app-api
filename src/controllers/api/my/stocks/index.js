import prisma from '../../../_helpers/prisma.js'
import handleErrors from '../../../_helpers/handle-errors.js'

const controllersApiMyStocksIndex = async (req, res) => {
  try {
    const { session: { user: { id: userId } } } = req

    // Common Where Query
    const where = {
      userId
    }

    const foundMyWishlists = await prisma.wishlist.findMany({
      where
    })

    return res.status(200).json({
      wishlists: foundMyWishlists
    })
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiMyStocksIndex
