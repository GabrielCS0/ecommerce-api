import { IHashPassword } from '../models/IHashPassword'
import CryptoJS, { AES } from 'crypto-js'

export class HashPassword implements IHashPassword {
  generateHash(password: string): string {
    const hashedPassword = AES.encrypt(
      password,
      process.env.SECRET_HASH_KEY
    ).toString()

    return hashedPassword
  }

  compare(password: string, hashedPassword: string): boolean {
    const hashedUserPassword = AES.decrypt(
      hashedPassword,
      process.env.SECRET_HASH_KEY
    )

    const userPassword = hashedUserPassword.toString(CryptoJS.enc.Utf8)
    const passwordMatch = userPassword === password

    return passwordMatch
  }
}
