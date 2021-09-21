import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { DeleteCartUseCase } from './DeleteCartUseCase'

export class DeleteCartController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const deleteCartUseCase = container.resolve(DeleteCartUseCase)

    await deleteCartUseCase.execute(id)

    return res.send()
  }
}
