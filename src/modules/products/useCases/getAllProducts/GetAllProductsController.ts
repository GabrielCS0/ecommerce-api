import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { GetAllProductsUseCase } from './GetAllProductsUseCase'

export class GetAllProductsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const category = req.query.category as string
    const newProducts = req.query.newProducts as string

    const getAllProductsUseCase = container.resolve(GetAllProductsUseCase)

    const products = await getAllProductsUseCase.execute(category, newProducts)

    return res.json(products)
  }
}
