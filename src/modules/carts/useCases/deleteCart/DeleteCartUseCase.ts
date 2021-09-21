import { ICartsRepository } from '@modules/carts/repositories/ICartsRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class DeleteCartUseCase {
  constructor(
    @inject('CartsRepository')
    private cartsRepository: ICartsRepository
  ) {}

  async execute(id: string): Promise<void> {
    await this.cartsRepository.findByIdAndDelete(id)
  }
}
