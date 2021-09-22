import Stripe from 'stripe'

export default {
  stripe: {
    secretKey: process.env.STRIPE_KEY,
    config: {
      apiVersion: '2020-08-27'
    } as Stripe.StripeConfig
  }
}
