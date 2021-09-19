import { ICreateProductDTO } from '@modules/products/dtos/ICreateProductDTO'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateProductUseCase } from './UpdateProductUseCase'

export class UpdateProductController {
  async handle(req: Request, res: Response): Promise<Response> {
    const product: ICreateProductDTO = req.body
    const { id } = req.params

    const updateProductUseCase = container.resolve(UpdateProductUseCase)

    const data = await updateProductUseCase.execute(id, product)

    return res.json(data)
  }
}
