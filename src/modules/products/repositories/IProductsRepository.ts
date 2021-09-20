import { ICreateProductDTO } from '../dtos/ICreateProductDTO'
import { ProductDocument } from '../infra/mongoose/schemas/Product'

export interface IProductsRepository {
  findByTitle(title: string): Promise<ProductDocument>
  create(data: ICreateProductDTO): Promise<ProductDocument>
  findByIdAndUpdate(
    id: string,
    data: ICreateProductDTO
  ): Promise<ProductDocument>
  findByIdAndDelete(id: string): Promise<void>
  findById(id: string): Promise<ProductDocument>
  findNewProducts(): Promise<ProductDocument[]>
  findProductsByCategory(category: string): Promise<ProductDocument[]>
  findAllProducts(): Promise<ProductDocument[]>
}
