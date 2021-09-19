import { ICreateProductDTO } from '../dtos/ICreateProductDTO'
import { ProductDocument } from '../infra/mongoose/schemas/Product'

export interface IProductsRepository {
  findByTitle(title: string): Promise<ProductDocument>
  create(data: ICreateProductDTO): Promise<ProductDocument>
}
