import { ProductDocument } from '@modules/products/infra/mongoose/schemas/Product'
import { IProductsRepository } from '@modules/products/repositories/IProductsRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class GetAllProductsUseCase {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository
  ) {}

  async execute(
    category?: string,
    newProducts?: string
  ): Promise<ProductDocument[]> {
    let products: ProductDocument[]

    if (category) {
      products = await this.productsRepository.findProductsByCategory(category)
    } else if (newProducts) {
      products = await this.productsRepository.findNewProducts()
    } else {
      products = await this.productsRepository.findAllProducts()
    }

    return products
  }
}
