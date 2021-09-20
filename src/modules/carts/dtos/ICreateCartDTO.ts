import { ICartProducts } from '../infra/mongoose/schemas/Cart'

export interface ICreateCartDTO {
  userId: string
  products: ICartProducts[]
}
