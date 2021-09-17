import { IAuthenticateUserDTO } from '@modules/users/dtos/IAuthenticateUserDTO'
import { UserDocument } from '@modules/users/infra/mongoose/schemas/User'
import { IHashPassword } from '@modules/users/providers/hashPassword/models/IHashPassword'
import { IToken } from '@modules/users/providers/token/models/IToken'
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository'
import { AppError } from '@shared/errors/AppError'
import { inject, injectable } from 'tsyringe'

interface IResponse {
  user: UserDocument
  accessToken: string
}

@injectable()
export class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashPassword')
    private hashPassword: IHashPassword,

    @inject('Token')
    private token: IToken
  ) {}

  async execute({ email, password }: IAuthenticateUserDTO): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) throw new AppError('Incorrect Email!', 401)

    const passwordMatch = this.hashPassword.compare(password, user.password)

    if (!passwordMatch) throw new AppError('Incorrect Password', 401)

    const accessToken = this.token.generate(user.isAdmin, user._id)

    user.password = undefined
    return { user, accessToken }
  }
}
