import mongoose, { Document, Schema, Model } from 'mongoose'

export interface ICartProducts {
  productId: string
  quantity?: number
}

type CartAttributes = {
  userId: string
  products: ICartProducts[]
}

export type CartDocument = Document & CartAttributes

type CartModel = Model<CartDocument>

const CartSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      unique: true,
      required: true
    },
    products: [
      {
        productId: { type: Schema.Types.ObjectId, required: true },
        quantity: { type: Number, default: 1 }
      }
    ]
  },
  {
    timestamps: true
  }
)

export default mongoose.model<CartDocument, CartModel>('Cart', CartSchema)
