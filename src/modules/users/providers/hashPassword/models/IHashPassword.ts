export interface IHashPassword {
  generateHash(password: string): string
  compare(password: string, hashedPassword: string): boolean
}
