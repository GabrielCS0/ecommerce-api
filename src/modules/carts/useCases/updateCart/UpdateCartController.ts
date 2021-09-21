import { IUpdateCartDTO } from '@modules/carts/dtos/IUpdateCartDTO'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateCartUseCase } from './UpdateCartUseCase'

export class UpdateCartController {
  async handle(req: Request, res: Response): Promise<Response> {
    const data = req.body as IUpdateCartDTO
    const { id } = req.params

    const updateCartUseCase = container.resolve(UpdateCartUseCase)

    const updatedCart = await updateCartUseCase.execute(id, data)

    return res.json(updatedCart)
  }
}
