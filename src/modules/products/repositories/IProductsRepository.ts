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
}
