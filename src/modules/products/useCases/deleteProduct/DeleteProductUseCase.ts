import { IProductsRepository } from '@modules/products/repositories/IProductsRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class DeleteProductUseCase {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository
  ) {}

  async execute(id: string): Promise<void> {
    await this.productsRepository.findByIdAndDelete(id)
  }
}
