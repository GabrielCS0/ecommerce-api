import { CartDocument } from '@modules/carts/infra/mongoose/schemas/Cart'
import { ICartsRepository } from '@modules/carts/repositories/ICartsRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class GetUserCartByUserIdUseCase {
  constructor(
    @inject('CartsRepository')
    private cartsRepository: ICartsRepository
  ) {}

  async execute(userId: string): Promise<CartDocument> {
    const cart = await this.cartsRepository.findUserCart(userId)
    return cart
  }
}
