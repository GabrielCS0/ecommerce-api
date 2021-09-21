import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { GetMonthlyIncomeUseCase } from './GetMonthlyIncomeUseCase'

export class GetMonthlyIncomeController {
  async handle(_: Request, res: Response): Promise<Response> {
    const getMonthlyIncomeUseCase = container.resolve(GetMonthlyIncomeUseCase)

    const income = await getMonthlyIncomeUseCase.execute()

    return res.json(income)
  }
}
