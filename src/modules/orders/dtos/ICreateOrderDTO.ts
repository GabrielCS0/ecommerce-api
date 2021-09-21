import {
  IOrderProducts,
  IStripeCustomerAddress
} from '../infra/mongoose/schemas/Order'

export interface ICreateOrderDTO {
  userId: string
  products: IOrderProducts[]
  amount: number
  address: IStripeCustomerAddress
  status?: string
}
