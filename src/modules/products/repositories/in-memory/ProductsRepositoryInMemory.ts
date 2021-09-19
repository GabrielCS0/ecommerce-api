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
}
