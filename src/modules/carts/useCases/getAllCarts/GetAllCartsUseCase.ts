import { CartDocument } from '@modules/carts/infra/mongoose/schemas/Cart'
import { ICartsRepository } from '@modules/carts/repositories/ICartsRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class GetAllCartsUseCase {
  constructor(
    @inject('CartsRepository')
    private cartsRepository: ICartsRepository
  ) {}

  async execute(): Promise<CartDocument[]> {
    const carts = await this.cartsRepository.findAllCarts()
    return carts
  }
}
