import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO'
import { FakeHashPassword } from '@modules/users/providers/hashPassword/fakes/FakeHashPassword'
import { UsersRepositoryInMemory } from '@modules/users/repositories/in-memory/UsersRepositoryInMemory'
import { CreateUserUseCase } from '../createUser/CreateUserUseCase'
import { GetUserByIdUseCase } from './GetUserByIdUseCase'

let getUserByIdUseCase: GetUserByIdUseCase
let createUserUseCase: CreateUserUseCase

describe('Get User By Id', () => {
  beforeAll(() => {
    const usersRepositoryInMemory = new UsersRepositoryInMemory()
    const fakeHashPassword = new FakeHashPassword()

    getUserByIdUseCase = new GetUserByIdUseCase(usersRepositoryInMemory)
    createUserUseCase = new CreateUserUseCase(
      usersRepositoryInMemory,
      fakeHashPassword
    )
  })

  it('Should get a user by id', async () => {
    const createUser: ICreateUserDTO = {
      name: 'Test',
      email: 'test@test.com',
      password: 'test'
    }

    const user = await createUserUseCase.execute(createUser)
    const userFound = await getUserByIdUseCase.execute(user._id)

    expect(userFound).toHaveProperty('email')
    expect(userFound._id).toBe(user._id)
  })
})
