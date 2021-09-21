import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { DeleteOrderUseCase } from './DeleteOrderUseCase'

export class DeleteOrderController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const deleteOrderUseCase = container.resolve(DeleteOrderUseCase)

    await deleteOrderUseCase.execute(id)

    return res.send()
  }
}
