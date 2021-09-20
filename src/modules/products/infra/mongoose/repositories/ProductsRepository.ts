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

  async findByIdAndUpdate(
    id: string,
    { title, desc, img, categories, size, color, price }: ICreateProductDTO
  ): Promise<ProductDocument> {
    const product = await Product.findOneAndUpdate(
      { _id: id },
      { title, desc, img, categories, size, color, price },
      { new: true }
    )

    return product
  }

  async findByIdAndDelete(id: string): Promise<void> {
    await Product.findOneAndDelete({ _id: id })
  }
}
