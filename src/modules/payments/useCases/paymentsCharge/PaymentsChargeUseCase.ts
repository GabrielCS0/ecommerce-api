import { ICreatePaymentsChargeDTO } from '@modules/payments/dtos/ICreatePaymentsChargeDTO'
import Stripe from 'stripe'
import { inject, injectable } from 'tsyringe'
import { IPayment } from '@modules/payments/providers/payment/models/IPayment'

@injectable()
export class PaymentsChargeUseCase {
  constructor(
    @inject('Payment')
    private payment: IPayment
  ) {}

  async execute({
    tokenId,
    amount
  }: ICreatePaymentsChargeDTO): Promise<Stripe.Response<Stripe.Charge>> {
    const charge = await this.payment.createCharge({ tokenId, amount })
    return charge
  }
}
