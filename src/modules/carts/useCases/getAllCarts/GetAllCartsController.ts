import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { GetAllCartsUseCase } from './GetAllCartsUseCase'

export class GetAllCartsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const getAllCartsUseCase = container.resolve(GetAllCartsUseCase)

    const carts = await getAllCartsUseCase.execute()

    return res.json(carts)
  }
}
