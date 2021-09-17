import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO'
import { CreateUserUseCase } from './CreateUserUseCase'
import { FakeHashPassword } from '@modules/users/providers/hashPassword/fakes/FakeHashPassword'
import { UsersRepositoryInMemory } from '@modules/users/repositories/in-memory/UsersRepositoryInMemory'
import { AppError } from '@shared/errors/AppError'

let createUserUseCase: CreateUserUseCase

describe('Create User', () => {
  beforeAll(() => {
    const usersRepositoryInMemory = new UsersRepositoryInMemory()
    const fakeHashPassword = new FakeHashPassword()

    createUserUseCase = new CreateUserUseCase(
      usersRepositoryInMemory,
      fakeHashPassword
    )
  })

  it('Should be able to create a new user', async () => {
    const user: ICreateUserDTO = {
      name: 'test',
      email: 'user@test.com',
      password: 'secret'
    }

    const result = await createUserUseCase.execute(user)

    expect(result).toHaveProperty('_id')
    expect(result.password).toBe(undefined)
  })

  it('Should not be able to create a new user with a existing email', async () => {
    const user: ICreateUserDTO = {
      name: 'test2',
      email: 'user@test.com',
      password: 'secret'
    }

    await expect(createUserUseCase.execute(user)).rejects.toBeInstanceOf(
      AppError
    )
  })
})
