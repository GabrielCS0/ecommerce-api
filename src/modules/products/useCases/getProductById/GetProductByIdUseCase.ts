import { ProductDocument } from '@modules/products/infra/mongoose/schemas/Product'
import { IProductsRepository } from '@modules/products/repositories/IProductsRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class GetProductByIdUseCase {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository
  ) {}

  async execute(id: string): Promise<ProductDocument> {
    const product = await this.productsRepository.findById(id)
    return product
  }
}
