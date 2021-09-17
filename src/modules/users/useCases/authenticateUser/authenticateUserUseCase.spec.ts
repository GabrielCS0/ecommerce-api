import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO'
import { UserDocument } from '@modules/users/infra/mongoose/schemas/User'
import { FakeHashPassword } from '@modules/users/providers/hashPassword/fakes/FakeHashPassword'
import { FakeToken } from '@modules/users/providers/token/fakes/FakeToken'
import { UsersRepositoryInMemory } from '@modules/users/repositories/in-memory/UsersRepositoryInMemory'
import { AppError } from '@shared/errors/AppError'
import { CreateUserUseCase } from '../createUser/CreateUserUseCase'
import { AuthenticateUserUseCase } from './authenticateUserUseCase'

let authenticateUserUseCase: AuthenticateUserUseCase
let createUserUseCase: CreateUserUseCase
let savedUser: UserDocument

describe('User Authentication', () => {
  beforeAll(async () => {
    const usersRepositoryInMemory = new UsersRepositoryInMemory()
    const fakeHashPassword = new FakeHashPassword()
    const token = new FakeToken()

    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory,
      fakeHashPassword,
      token
    )

    createUserUseCase = new CreateUserUseCase(
      usersRepositoryInMemory,
      fakeHashPassword
    )

    const user: ICreateUserDTO = {
      name: 'test',
      email: 'user@test.com',
      password: 'secret'
    }

    savedUser = await createUserUseCase.execute(user)
  })

  it('Should authenticate a user', async () => {
    savedUser.password = 'secret'

    const result = await authenticateUserUseCase.execute({
      email: 'user@test.com',
      password: 'secret'
    })

    expect(result.user).toHaveProperty('_id')
    expect(result).toHaveProperty('accessToken')
  })

  it('Should not authenticate a user with a wrong email', async () => {
    await expect(
      authenticateUserUseCase.execute({
        email: 'user1@test.com',
        password: 'secret'
      })
    ).rejects.toBeInstanceOf(AppError)
  })

  it('Should not authenticate a user with a wrong password', async () => {
    savedUser.password = 'secret'
    await expect(
      authenticateUserUseCase.execute({
        email: 'user@test.com',
        password: 'secret123'
      })
    ).rejects.toBeInstanceOf(AppError)
  })
})
