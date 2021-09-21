import { ICartProducts } from '../infra/mongoose/schemas/Cart'

export interface IUpdateCartDTO {
  products: ICartProducts[]
}
