import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { GetUserCartByUserIdUseCase } from './GetUserCartByUserIdUseCase'

export class GetUserCartByUserIdController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { userId } = req.params

    const getUserCartByUserIdUseCase = container.resolve(
      GetUserCartByUserIdUseCase
    )

    const cart = await getUserCartByUserIdUseCase.execute(userId)

    return res.json(cart)
  }
}
