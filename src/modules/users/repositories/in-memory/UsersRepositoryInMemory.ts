import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO'
import User, { UserDocument } from '@modules/users/infra/mongoose/schemas/User'
import { IUsersRepository } from '../IUsersRepository'

export class UsersRepositoryInMemory implements IUsersRepository {
  users: UserDocument[] = []

  async findByEmail(email: string): Promise<UserDocument> {
    return this.users.find(user => user.email === email)
  }

  async create({
    name,
    email,
    password
  }: ICreateUserDTO): Promise<UserDocument> {
    const user = new User({ name, email, password })
    this.users.push(user)

    return user
  }
}
