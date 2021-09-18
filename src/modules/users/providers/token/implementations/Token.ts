import auth from '@config/auth'
import { sign } from 'jsonwebtoken'
import { IToken } from '../models/IToken'

export class Token implements IToken {
  generate(isAdmin: boolean, userId: string): string {
    const { secret, expiresIn } = auth.jwt

    const token = sign(
      {
        id: userId.toString(),
        isAdmin
      },
      secret,
      {
        expiresIn
      }
    )

    return token
  }
}
