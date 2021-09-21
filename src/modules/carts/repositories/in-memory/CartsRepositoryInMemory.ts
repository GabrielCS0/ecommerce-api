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

  async findByIdAndDelete(id: string): Promise<void> {
    this.carts = this.carts.map(cart => {
      if (cart._id !== id) return cart
      return null
    })
  }

  async findUserCart(userId: string): Promise<CartDocument> {
    const cart = this.carts.find(cart => cart.userId === userId)
    return cart
  }
}
