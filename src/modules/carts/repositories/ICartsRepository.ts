import { ICreateCartDTO } from '../dtos/ICreateCartDTO'
import { IUpdateCartDTO } from '../dtos/IUpdateCartDTO'
import { CartDocument } from '../infra/mongoose/schemas/Cart'

export interface ICartsRepository {
  create(data: ICreateCartDTO): Promise<CartDocument>
  findByIdAndDelete(id: string): Promise<void>
  findUserCart(userId: string): Promise<CartDocument>
  findAllCarts(): Promise<CartDocument[]>
  findByIdAndUpdate(id: string, data: IUpdateCartDTO): Promise<CartDocument>
}
