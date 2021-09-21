import { ICreateOrderDTO } from '@modules/orders/dtos/ICreateOrderDTO'
import Order, {
  OrderDocument
} from '@modules/orders/infra/mongoose/schemas/Order'
import { IOrdersRepository } from '../IOrdersRepository'

export class OrdersRepositoryInMemory implements IOrdersRepository {
  oders: OrderDocument[] = []

  async create(data: ICreateOrderDTO): Promise<OrderDocument> {
    const order = new Order(data)
    this.oders.push(order)

    return order
  }
}
