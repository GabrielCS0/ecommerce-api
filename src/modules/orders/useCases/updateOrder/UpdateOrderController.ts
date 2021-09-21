import { ICreateOrderDTO } from '@modules/orders/dtos/ICreateOrderDTO'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateOrderUseCase } from './UpdateOrderUseCase'

export class UpdateOrderController {
  async handle(req: Request, res: Response): Promise<Response> {
    const data = req.body as ICreateOrderDTO
    const { id } = req.params

    const updateOrderUseCase = container.resolve(UpdateOrderUseCase)

    const updatedOrder = await updateOrderUseCase.execute(id, data)

    return res.json(updatedOrder)
  }
}
