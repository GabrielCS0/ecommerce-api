import { ICreateOrderDTO } from '@modules/orders/dtos/ICreateOrderDTO'
import { OrderDocument } from '@modules/orders/infra/mongoose/schemas/Order'
import { IOrdersRepository } from '@modules/orders/repositories/IOrdersRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class CreateOrderUseCase {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository
  ) {}

  async execute(data: ICreateOrderDTO): Promise<OrderDocument> {
    const order = await this.ordersRepository.create(data)
    return order
  }
}
