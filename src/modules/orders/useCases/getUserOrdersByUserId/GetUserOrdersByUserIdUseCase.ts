import { OrderDocument } from '@modules/orders/infra/mongoose/schemas/Order'
import { IOrdersRepository } from '@modules/orders/repositories/IOrdersRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class GetUserOrdersByUserIdUseCase {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository
  ) {}

  async execute(userId: string): Promise<OrderDocument[]> {
    const orders = await this.ordersRepository.findUserOrders(userId)
    return orders
  }
}
