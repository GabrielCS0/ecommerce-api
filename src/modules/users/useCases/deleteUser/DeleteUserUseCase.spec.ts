import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO'
import { FakeHashPassword } from '@modules/users/providers/hashPassword/fakes/FakeHashPassword'
import { UsersRepositoryInMemory } from '@modules/users/repositories/in-memory/UsersRepositoryInMemory'
import { CreateUserUseCase } from '../createUser/CreateUserUseCase'
import { DeleteUserUseCase } from './DeleteUserUseCase'

let deleteUserUseCase: DeleteUserUseCase
let createUserUseCase: CreateUserUseCase
let usersRepositoryInMemory: UsersRepositoryInMemory

describe('Delete User', () => {
  beforeAll(() => {
    const fakeHashPassword = new FakeHashPassword()
    usersRepositoryInMemory = new UsersRepositoryInMemory()

    deleteUserUseCase = new DeleteUserUseCase(usersRepositoryInMemory)
    createUserUseCase = new CreateUserUseCase(
      usersRepositoryInMemory,
      fakeHashPassword
    )
  })

  it('Should delete a user', async () => {
    const createUser: ICreateUserDTO = {
      name: 'Test',
      email: 'test@test.com',
      password: 'test'
    }

    const user = await createUserUseCase.execute(createUser)
    await deleteUserUseCase.execute(user._id)

    expect(usersRepositoryInMemory.users).toStrictEqual([undefined])
  })
})
