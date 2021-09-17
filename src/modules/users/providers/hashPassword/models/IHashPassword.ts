export interface IHashPassword {
  generateHash(password: string): string
}
