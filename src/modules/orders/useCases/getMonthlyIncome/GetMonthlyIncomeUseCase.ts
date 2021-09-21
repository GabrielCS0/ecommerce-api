import { IOrdersRepository } from '@modules/orders/repositories/IOrdersRepository'
import { inject, injectable } from 'tsyringe'

export interface IMonthlyIncome {
  _id: number
  total: number
}

@injectable()
export class GetMonthlyIncomeUseCase {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository
  ) {}

  async execute(): Promise<IMonthlyIncome[]> {
    const income = await this.ordersRepository.getMonthlyIncome()
    return income
  }
}
