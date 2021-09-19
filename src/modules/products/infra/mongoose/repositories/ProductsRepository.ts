import { ICreateProductDTO } from '@modules/products/dtos/ICreateProductDTO'
import { IProductsRepository } from '@modules/products/repositories/IProductsRepository'
import Product, { ProductDocument } from '../schemas/Product'

export class ProductsRepositort implements IProductsRepository {
  async findByTitle(title: string): Promise<ProductDocument> {
    const product = await Product.findOne({ title })
    return product
  }

  async create(data: ICreateProductDTO): Promise<ProductDocument> {
    const product = new Product(data)
    await product.save()

    return product
  }
}
