import { IHashPassword } from '../models/IHashPassword'
import { AES } from 'crypto-js'

export class HashPassword implements IHashPassword {
  generateHash(password: string): string {
    const hashedPassword = AES.encrypt(
      password,
      process.env.SECRET_HASH_KEY
    ).toString()

    return hashedPassword
  }
}
