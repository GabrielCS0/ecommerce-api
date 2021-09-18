import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO'
import { FakeHashPassword } from '@modules/users/providers/hashPassword/fakes/FakeHashPassword'
import { UsersRepositoryInMemory } from '@modules/users/repositories/in-memory/UsersRepositoryInMemory'
import { CreateUserUseCase } from '../createUser/CreateUserUseCase'
import { UpdateUserUseCase } from './UpdateUserUseCase'

let updateUserUseCase: UpdateUserUseCase
let createUserUseCase: CreateUserUseCase

describe('Update User', () => {
  beforeAll(() => {
    const fakeHashPassword = new FakeHashPassword()
    const usersRepositoryInMemory = new UsersRepositoryInMemory()

    updateUserUseCase = new UpdateUserUseCase(
      fakeHashPassword,
      usersRepositoryInMemory
    )

    createUserUseCase = new CreateUserUseCase(
      usersRepositoryInMemory,
      fakeHashPassword
    )
  })

  it('Should be able to update a user', async () => {
    const createUser: ICreateUserDTO = {
      name: 'Test',
      email: 'test@test.com',
      password: 'test'
    }

    const user = await createUserUseCase.execute(createUser)

    const result = await updateUserUseCase.execute({
      id: user._id,
      name: 'Test',
      email: 'test@test2.com',
      password: 'test-password'
    })

    expect(result.email).toBe('test@test2.com')
    expect(result.password).toBe('test-password')
  })
})
