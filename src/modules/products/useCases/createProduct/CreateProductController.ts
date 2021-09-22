import { ICreateProductDTO } from '@modules/products/dtos/ICreateProductDTO'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateProductUseCase } from './CreateProductUseCase'

export class CreateProductController {
  async handle(req: Request, res: Response): Promise<Response> {
    const product: ICreateProductDTO = req.body

    const createProductUseCase = container.resolve(CreateProductUseCase)

    const data = await createProductUseCase.execute(product)

    return res.status(201).json(data)
  }
}
