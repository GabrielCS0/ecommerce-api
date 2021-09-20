import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { DeleteProductUseCase } from './DeleteProductUseCase'

export class DeleteProductController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const deleteProductUseCase = container.resolve(DeleteProductUseCase)

    await deleteProductUseCase.execute(id)

    return res.send()
  }
}
