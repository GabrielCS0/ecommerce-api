import { ICreateProductDTO } from '@modules/products/dtos/ICreateProductDTO'
import { ProductDocument } from '@modules/products/infra/mongoose/schemas/Product'
import { IProductsRepository } from '@modules/products/repositories/IProductsRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class UpdateProductUseCase {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository
  ) {}

  async execute(id: string, data: ICreateProductDTO): Promise<ProductDocument> {
    const updatedProduct = await this.productsRepository.findByIdAndUpdate(
      id,
      data
    )

    return updatedProduct
  }
}
