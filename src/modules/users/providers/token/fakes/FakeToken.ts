import { sign } from 'jsonwebtoken'
import { IToken } from '../models/IToken'

export class FakeToken implements IToken {
  generate(isAdmin: boolean, userId: string): string {
    const token = sign(
      {
        isAdmin
      },
      'secret64617rhd26ts',
      {
        subject: userId.toString(),
        expiresIn: '30s'
      }
    )

    return token
  }
}
