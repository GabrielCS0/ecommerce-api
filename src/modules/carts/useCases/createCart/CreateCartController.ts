import { ICartProducts } from '@modules/carts/infra/mongoose/schemas/Cart'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateCartUseCase } from './CreateCartUseCase'

export class CreateCartController {
  async handle(req: Request, res: Response): Promise<Response> {
    const userId = req.body.userId as string
    const products = req.body.products as ICartProducts[]

    const createCartUseCase = container.resolve(CreateCartUseCase)

    const cart = await createCartUseCase.execute({ userId, products })

    return res.status(201).json(cart)
  }
}
