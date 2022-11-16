import yup from 'yup'

import prisma from '../../../_helpers/prisma.js'
import handleErrors from '../../../_helpers/handle-errors.js'

const createSchema = yup.object({
  title: yup.string().required(),
  description: yup.string()
})

const controllersApiMyStocksCreate = async (req, res) => {
  try {
    const { body, session: { user: { id: userId } } } = req
    const verifiedData = await createSchema.validate(body, { abortEarly: false, stripUnknown: true })
    const newStock = await prisma.stocks.create({ data: { ...verifiedData, userId } })
    return res.status(201).json(newStock)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiMyStocksCreate
