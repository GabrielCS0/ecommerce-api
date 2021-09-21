import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { GetAllOrdersUseCase } from './GetAllOrdersUseCase'

export class GetAllOrdersController {
  async handle(req: Request, res: Response): Promise<Response> {
    const getAllOrdersUseCase = container.resolve(GetAllOrdersUseCase)

    const orders = await getAllOrdersUseCase.execute()

    return res.json(orders)
  }
}
