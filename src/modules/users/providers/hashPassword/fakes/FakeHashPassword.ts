import { IHashPassword } from '../models/IHashPassword'

export class FakeHashPassword implements IHashPassword {
  generateHash(password: string): string {
    return password
  }

  compare(password: string, hashedPassword: string): boolean {
    return password === hashedPassword
  }
}
