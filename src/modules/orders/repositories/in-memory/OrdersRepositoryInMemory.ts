import { ICreateOrderDTO } from '@modules/orders/dtos/ICreateOrderDTO'
import Order, {
  OrderDocument
} from '@modules/orders/infra/mongoose/schemas/Order'
import { IOrdersRepository } from '../IOrdersRepository'

export class OrdersRepositoryInMemory implements IOrdersRepository {
  orders: OrderDocument[] = []

  async create(data: ICreateOrderDTO): Promise<OrderDocument> {
    const order = new Order(data)
    this.orders.push(order)

    return order
  }

  async findByIdAndUpdate(
    id: string,
    { userId, products, amount, address, status }: ICreateOrderDTO
  ): Promise<OrderDocument> {
    const order = this.orders.find(order => order._id === id)
    Object.assign(order, { userId, products, amount, address, status })

    return order
  }
}
