import { container } from 'tsyringe'

import { IUsersRepository } from '@modules/users/repositories/IUsersRepository'
import { UsersRepository } from '@modules/users/infra/mongoose/repositories/UsersRepository'

import { IHashPassword } from '@modules/users/providers/hashPassword/models/IHashPassword'
import { HashPassword } from '@modules/users/providers/hashPassword/implementations/HashPassword'

import { IToken } from '@modules/users/providers/token/models/IToken'
import { Token } from '@modules/users/providers/token/implementations/Token'

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
)

container.registerSingleton<IHashPassword>('HashPassword', HashPassword)

container.registerSingleton<IToken>('Token', Token)