import { OrderDocument } from '@modules/orders/infra/mongoose/schemas/Order'
import { IOrdersRepository } from '@modules/orders/repositories/IOrdersRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class GetAllOrdersUseCase {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository
  ) {}

  async execute(): Promise<OrderDocument[]> {
    const orders = await this.ordersRepository.findAllOrders()
    return orders
  }
}
