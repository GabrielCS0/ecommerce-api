import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { GetUserOrdersByUserIdUseCase } from './GetUserOrdersByUserIdUseCase'

export class GetUserOrdersByUserIdController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { userId } = req.params

    const getUserOrdersByUserIdUseCase = container.resolve(
      GetUserOrdersByUserIdUseCase
    )

    const orders = await getUserOrdersByUserIdUseCase.execute(userId)

    return res.json(orders)
  }
}
