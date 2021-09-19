import { UserDocument } from '@modules/users/infra/mongoose/schemas/User'
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class GetAllUsersUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute(newUsers?: string): Promise<UserDocument[]> {
    const users = newUsers
      ? await this.usersRepository.findNewUsers()
      : await this.usersRepository.findAllUsers()

    return users
  }
}
