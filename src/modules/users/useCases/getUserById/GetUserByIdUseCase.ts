import { UserDocument } from '@modules/users/infra/mongoose/schemas/User'
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class GetUserByIdUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute(id: string): Promise<UserDocument> {
    const user = await this.usersRepository.findById(id)
    return user
  }
}
