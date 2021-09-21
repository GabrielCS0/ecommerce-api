import { ICreateOrderDTO } from '@modules/orders/dtos/ICreateOrderDTO'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateOrderUseCase } from './CreateOrderUseCase'

export class CreateOrderController {
  async handle(req: Request, res: Response): Promise<Response> {
    const data = req.body as ICreateOrderDTO

    const createOrderUseCase = container.resolve(CreateOrderUseCase)

    const order = await createOrderUseCase.execute(data)

    return res.status(201).json(order)
  }
}
