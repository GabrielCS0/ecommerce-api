import { ICreateCartDTO } from '../dtos/ICreateCartDTO'
import { CartDocument } from '../infra/mongoose/schemas/Cart'

export interface ICartsRepository {
  create(data: ICreateCartDTO): Promise<CartDocument>
  findByIdAndDelete(id: string): Promise<void>
  findUserCart(userId: string): Promise<CartDocument>
}
