import { ICreateCartDTO } from '@modules/carts/dtos/ICreateCartDTO'
import Cart, { CartDocument } from '@modules/carts/infra/mongoose/schemas/Cart'
import { ICartsRepository } from '../ICartsRepository'

export class CartsRepositoryInMemory implements ICartsRepository {
  carts: CartDocument[] = []

  async create(data: ICreateCartDTO): Promise<CartDocument> {
    const cart = new Cart(data)
    this.carts.push(cart)

    return cart
  }
}
