import { ICreateProductDTO } from '@modules/products/dtos/ICreateProductDTO'
import Product, {
  ProductDocument
} from '@modules/products/infra/mongoose/schemas/Product'
import { IProductsRepository } from '../IProductsRepository'

export class ProductsRepositoryInMemory implements IProductsRepository {
  products: ProductDocument[] = []

  async findByTitle(title: string): Promise<ProductDocument> {
    return this.products.find(product => product.title === title)
  }

  async create(data: ICreateProductDTO): Promise<ProductDocument> {
    const product = new Product(data)
    this.products.push(product)

    return product
  }

  async findByIdAndUpdate(
    id: string,
    { title, desc, img, categories, size, color, price }: ICreateProductDTO
  ): Promise<ProductDocument> {
    const product = this.products.find(product => product._id === id)
    Object.assign(product, { title, desc, img, categories, size, color, price })

    return product
  }

  async findByIdAndDelete(id: string): Promise<void> {
    this.products = this.products.map(product => {
      if (product._id !== id) return product
      return undefined
    })
  }

  async findById(id: string): Promise<ProductDocument> {
    return this.products.find(product => product._id === id)
  }

  async findNewProducts(): Promise<ProductDocument[]> {
    const products = this.products.slice(-2)
    return products
  }

  async findProductsByCategory(category: string): Promise<ProductDocument[]> {
    const products = this.products.filter(product => {
      if (product.categories.includes(category)) return product
      return null
    })

    return products
  }

  async findAllProducts(): Promise<ProductDocument[]> {
    return this.products
  }
}
