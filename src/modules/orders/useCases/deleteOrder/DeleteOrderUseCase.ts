import { IOrdersRepository } from '@modules/orders/repositories/IOrdersRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class DeleteOrderUseCase {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository
  ) {}

  async execute(id: string): Promise<void> {
    await this.ordersRepository.findByIdAndDelete(id)
  }
}
