import { container } from 'tsyringe'

import { IUsersRepository } from '@modules/users/repositories/IUsersRepository'
import { UsersRepository } from '@modules/users/infra/mongoose/repositories/UsersRepository'

import { IHashPassword } from '@modules/users/providers/hashPassword/models/IHashPassword'
import { HashPassword } from '@modules/users/providers/hashPassword/implementations/HashPassword'

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
)

container.registerSingleton<IHashPassword>('HashPassword', HashPassword)
