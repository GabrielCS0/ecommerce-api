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

  async findById(id: string): Promise<ProductDocument> {
    const product = await Product.findOne({ _id: id })
    return product
  }

  async findNewProducts(): Promise<ProductDocument[]> {
    const products = await Product.find().sort({ createdAt: -1 }).limit(5)
    return products
  }

  async findProductsByCategory(category: string): Promise<ProductDocument[]> {
    const products = await Product.find({ categories: { $in: [category] } })
    return products
  }

  async findAllProducts(): Promise<ProductDocument[]> {
    const products = await Product.find()
    return products
  }
}
