import { UserDocument } from '@modules/users/infra/mongoose/schemas/User'
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository'
import { inject, injectable } from 'tsyringe'

export interface IUserStatsResponse {
  _id: number
  total: number
}

@injectable()
export class UserStatsUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute(): Promise<IUserStatsResponse[]> {
    const userStats = await this.usersRepository.userStats()
    return userStats
  }
}
