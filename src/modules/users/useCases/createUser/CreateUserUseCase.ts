import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO'
import { UserDocument } from '@modules/users/infra/mongoose/schemas/User'
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository'
import { AppError } from '@shared/errors/AppError'
import { inject, injectable } from 'tsyringe'
import { IHashPassword } from '@modules/users/providers/hashPassword/models/IHashPassword'

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashPassword')
    private hashPassword: IHashPassword
  ) {}

  async execute({
    name,
    email,
    password,
    isAdmin
  }: ICreateUserDTO): Promise<UserDocument> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email)

    if (userAlreadyExists) throw new AppError('User Already Exists!')

    const hashedPassword = this.hashPassword.generateHash(password)

    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
      isAdmin
    })

    user.password = undefined

    return user
  }
}
