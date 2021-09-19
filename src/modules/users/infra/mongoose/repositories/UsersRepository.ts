import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO'
import { IUpdateUserDTO } from '@modules/users/dtos/IUpdateUserDTO'
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository'
import User, { UserDocument } from '../schemas/User'

export class UsersRepository implements IUsersRepository {
  async findByEmail(email: string): Promise<UserDocument> {
    const user = await User.findOne({ email }).select('+password')
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

  async findByIdAndUpdate({
    id,
    name,
    email,
    password
  }: IUpdateUserDTO): Promise<UserDocument> {
    const user = await User.findOneAndUpdate(
      { _id: id },
      {
        name,
        email,
        password
      },
      { new: true }
    )

    return user
  }

  async findByIdAndDelete(id: string): Promise<void> {
    await User.findOneAndDelete({ _id: id })
  }
}
