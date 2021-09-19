import { ICreateProductDTO } from '@modules/products/dtos/ICreateProductDTO'
import { ProductDocument } from '@modules/products/infra/mongoose/schemas/Product'
import { IProductsRepository } from '@modules/products/repositories/IProductsRepository'
import { AppError } from '@shared/errors/AppError'
import { inject, injectable } from 'tsyringe'

@injectable()
export class CreateProductUseCase {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository
  ) {}

  async execute(product: ICreateProductDTO): Promise<ProductDocument> {
    const productAlreadyExists = await this.productsRepository.findByTitle(
      product.title
    )

    if (productAlreadyExists) {
      throw new AppError('There is already a product with this title!')
    }

    const data = await this.productsRepository.create(product)

    return data
  }
}
