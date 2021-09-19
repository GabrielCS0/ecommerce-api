import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO'
import { IUpdateUserDTO } from '@modules/users/dtos/IUpdateUserDTO'
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository'
import { IUserStatsResponse } from '@modules/users/useCases/userStats/UserStatsUseCase'
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

  async findById(id: string): Promise<UserDocument> {
    const user = await User.findOne({ _id: id })
    return user
  }

  async findAllUsers(): Promise<UserDocument[]> {
    const users = await User.find()
    return users
  }

  async findNewUsers(): Promise<UserDocument[]> {
    const users = await User.find().sort({ _id: -1 }).limit(5)
    return users
  }

  async userStats(): Promise<IUserStatsResponse[]> {
    const date = new Date()
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))

    const userStats: IUserStatsResponse[] = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: '$createdAt' }
        }
      },
      {
        $group: {
          _id: '$month',
          total: { $sum: 1 }
        }
      }
    ])

    return userStats
  }
}
