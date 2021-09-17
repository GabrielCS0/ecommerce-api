import mongoose, { Document, Schema, Model } from 'mongoose'

type UserAttributes = {
  name: string
  email: string
  password: string
  isAdmin: boolean
}

export type UserDocument = Document & UserAttributes

type UserModel = Model<UserDocument>

const UserSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true,
      select: false
    },
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model<UserDocument, UserModel>('User', UserSchema)
