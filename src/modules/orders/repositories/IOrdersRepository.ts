import { ICreateOrderDTO } from '../dtos/ICreateOrderDTO'
import { OrderDocument } from '../infra/mongoose/schemas/Order'

export interface IOrdersRepository {
  create(data: ICreateOrderDTO): Promise<OrderDocument>
  findByIdAndUpdate(id: string, data: ICreateOrderDTO): Promise<OrderDocument>
}
