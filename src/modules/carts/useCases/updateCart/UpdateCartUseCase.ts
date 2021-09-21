import { IUpdateCartDTO } from '@modules/carts/dtos/IUpdateCartDTO'
import { CartDocument } from '@modules/carts/infra/mongoose/schemas/Cart'
import { ICartsRepository } from '@modules/carts/repositories/ICartsRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class UpdateCartUseCase {
  constructor(
    @inject('CartsRepository')
    private cartsRepository: ICartsRepository
  ) {}

  async execute(id: string, data: IUpdateCartDTO): Promise<CartDocument> {
    const updatedCart = await this.cartsRepository.findByIdAndUpdate(id, data)
    return updatedCart
  }
}
