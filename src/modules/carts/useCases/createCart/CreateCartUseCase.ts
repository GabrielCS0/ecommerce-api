import { ICreateCartDTO } from '@modules/carts/dtos/ICreateCartDTO'
import { CartDocument } from '@modules/carts/infra/mongoose/schemas/Cart'
import { ICartsRepository } from '@modules/carts/repositories/ICartsRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class CreateCartUseCase {
  constructor(
    @inject('CartsRepository')
    private cartsRepository: ICartsRepository
  ) {}

  async execute(data: ICreateCartDTO): Promise<CartDocument> {
    const cart = await this.cartsRepository.create(data)
    return cart
  }
}
