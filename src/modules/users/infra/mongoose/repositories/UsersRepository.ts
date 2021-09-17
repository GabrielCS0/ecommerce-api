import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO'
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository'
import User, { UserDocument } from '../schemas/User'

export class UsersRepository implements IUsersRepository {
  async findByEmail(email: string): Promise<UserDocument> {
    const user = await User.findOne({ email })
    return user
  }

  async create({
    name,
    email,
    password,
    isAdmin
  }: ICreateUserDTO): Promise<UserDocument> {
    const user = new User({
      name,
      email,
      password,
      isAdmin
    })

    await user.save()

    return user
  }
}
