import { ICreateCartDTO } from '@modules/carts/dtos/ICreateCartDTO'
import { IUpdateCartDTO } from '@modules/carts/dtos/IUpdateCartDTO'
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

  async findAllCarts(): Promise<CartDocument[]> {
    return this.carts
  }

  async findByIdAndUpdate(
    id: string,
    { products }: IUpdateCartDTO
  ): Promise<CartDocument> {
    const cart = this.carts.find(cart => cart._id === id)
    Object.assign(cart, { products })

    return cart
  }
}
