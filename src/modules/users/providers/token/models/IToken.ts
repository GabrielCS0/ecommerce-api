export interface IToken {
  generate(isAdmin: boolean, userId: string): string
}
