import mongoose, { Document, Schema, Model } from 'mongoose'

export interface IOrderProducts {
  productId: string
  quantity?: number
}

export interface IStripeCustomerAddress {
  city: string
  country: string
  line1: string
  line2: string
  postal_code: string // eslint-disable-line camelcase
  state: string
}

type OrderAttributes = {
  userId: string
  products: IOrderProducts[]
  amount: number
  address: IStripeCustomerAddress
  status: string
}

export type OrderDocument = Document & OrderAttributes

type OrderModel = Model<OrderDocument>

const OrderSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true
    },
    products: [
      {
        productId: { type: Schema.Types.ObjectId, required: true },
        quantity: { type: Number, default: 1 }
      }
    ],
    amount: {
      type: Number,
      required: true
    },
    address: {
      type: Object,
      required: true
    },
    status: {
      type: String,
      default: 'pending'
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model<OrderDocument, OrderModel>('Order', OrderSchema)
