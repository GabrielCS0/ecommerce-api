import { ICreatePaymentsChargeDTO } from '@modules/payments/dtos/ICreatePaymentsChargeDTO'
import Stripe from 'stripe'

export interface IPayment {
  createCharge(
    data: ICreatePaymentsChargeDTO
  ): Promise<Stripe.Response<Stripe.Charge>>
}
