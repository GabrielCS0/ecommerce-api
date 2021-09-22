import { IPayment } from '../models/IPayment'
import { ICreatePaymentsChargeDTO } from '@modules/payments/dtos/ICreatePaymentsChargeDTO'
import Stripe from 'stripe'
import payment from '@config/payment'
import { AppError } from '@shared/errors/AppError'

export class Payment implements IPayment {
  async createCharge({
    tokenId,
    amount
  }: ICreatePaymentsChargeDTO): Promise<Stripe.Response<Stripe.Charge>> {
    const { secretKey, config } = payment.stripe
    const stripe = new Stripe(secretKey, config)

    try {
      const charge = await stripe.charges.create({
        source: tokenId,
        amount,
        currency: 'usd'
      })

      return charge
    } catch (err) {
      throw new AppError(err.raw.message, err.statusCode)
    }
  }
}
