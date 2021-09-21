import { ICreateOrderDTO } from '@modules/orders/dtos/ICreateOrderDTO'
import { OrderDocument } from '@modules/orders/infra/mongoose/schemas/Order'
import { IOrdersRepository } from '@modules/orders/repositories/IOrdersRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class UpdateOrderUseCase {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository
  ) {}

  async execute(id: string, data: ICreateOrderDTO): Promise<OrderDocument> {
    const updatedOrder = await this.ordersRepository.findByIdAndUpdate(id, data)
    return updatedOrder
  }
}
