import { IHashPassword } from '../models/IHashPassword'

export class FakeHashPassword implements IHashPassword {
  generateHash(password: string): string {
    return password
  }
}
