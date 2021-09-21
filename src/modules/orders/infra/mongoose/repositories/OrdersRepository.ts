import { ICreateOrderDTO } from '@modules/orders/dtos/ICreateOrderDTO'
import { IOrdersRepository } from '@modules/orders/repositories/IOrdersRepository'
import Order, { OrderDocument } from '../schemas/Order'

export class OrdersRepository implements IOrdersRepository {
  async create(data: ICreateOrderDTO): Promise<OrderDocument> {
    const order = new Order(data)
    await order.save()

    return order
  }

  async findByIdAndUpdate(
    id: string,
    { userId, products, amount, address, status }: ICreateOrderDTO
  ): Promise<OrderDocument> {
    const order = await Order.findOneAndUpdate(
      { _id: id },
      { userId, products, amount, address, status },
      { new: true }
    )

    return order
  }
}
