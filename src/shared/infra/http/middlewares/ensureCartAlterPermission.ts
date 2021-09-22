import Cart from '@modules/carts/infra/mongoose/schemas/Cart'
import { AppError } from '@shared/errors/AppError'
import { NextFunction, Request, Response } from 'express'

export async function ensureCartAlterPermission(
  req: Request,
  _: Response,
  next: NextFunction
): Promise<void> {
  const userId = req.user.id
  const cartId = req.params.id

  const cart = await Cart.findOne({ _id: cartId })

  if (cart.userId.toString() !== userId) {
    throw new AppError('You are not alowed to do that!', 401)
  }

  return next()
}
