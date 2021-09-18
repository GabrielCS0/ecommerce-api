import { IUpdateUserDTO } from '@modules/users/dtos/IUpdateUserDTO'
import { UserDocument } from '@modules/users/infra/mongoose/schemas/User'
import { IHashPassword } from '@modules/users/providers/hashPassword/models/IHashPassword'
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class UpdateUserUseCase {
  constructor(
    @inject('HashPassword')
    private hashPassword: IHashPassword,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    id,
    name,
    email,
    password
  }: IUpdateUserDTO): Promise<UserDocument> {
    if (password) password = this.hashPassword.generateHash(password)

    const updatedUser = await this.usersRepository.findByIdAndUpdate({
      id,
      name,
      email,
      password
    })

    return updatedUser
  }
}
