import { FakeHashPassword } from '@modules/users/providers/hashPassword/fakes/FakeHashPassword'
import { UsersRepositoryInMemory } from '@modules/users/repositories/in-memory/UsersRepositoryInMemory'
import { CreateUserUseCase } from '../createUser/CreateUserUseCase'
import { GetAllUsersUseCase } from './GetAllUsersUseCase'

let getAllUsersUseCase: GetAllUsersUseCase

describe('Get All Users', () => {
  beforeAll(async () => {
    const usersRepositoryInMemory = new UsersRepositoryInMemory()
    const fakeHashPassword = new FakeHashPassword()

    getAllUsersUseCase = new GetAllUsersUseCase(usersRepositoryInMemory)

    const createUserUseCase = new CreateUserUseCase(
      usersRepositoryInMemory,
      fakeHashPassword
    )

    for (let i = 1; i <= 3; i++) {
      await createUserUseCase.execute({
        name: `Test ${i}`,
        email: `test${i}test.com`,
        password: 'test'
      })
    }
  })

  it('Should get all users', async () => {
    const allUsers = await getAllUsersUseCase.execute()
    const newUsers = await getAllUsersUseCase.execute('newUsers')

    expect(allUsers.length).toBe(3)
    expect(allUsers[0]).toHaveProperty('_id')
    expect(newUsers.length).toBe(2)
  })
})
