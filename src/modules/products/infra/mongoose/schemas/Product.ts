import mongoose, { Document, Schema, Model } from 'mongoose'

type ProductAttributes = {
  title: string
  desc: string
  img: string
  categories: string[]
  size: string
  color: string
  price: number
}

export type ProductDocument = Document & ProductAttributes

type ProductModel = Model<ProductDocument>

const ProductSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      unique: true,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    categories: {
      type: Array
    },
    size: {
      type: String
    },
    color: {
      type: String
    },
    price: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model<ProductDocument, ProductModel>(
  'Product',
  ProductSchema
)
