import { FakeHashPassword } from '@modules/users/providers/hashPassword/fakes/FakeHashPassword'
import { UsersRepositoryInMemory } from '@modules/users/repositories/in-memory/UsersRepositoryInMemory'
import { CreateUserUseCase } from '../createUser/CreateUserUseCase'
import { UserStatsUseCase } from './UserStatsUseCase'

let userStatsUseCase: UserStatsUseCase

describe('User Stats', () => {
  beforeAll(async () => {
    const usersRepositoryInMemory = new UsersRepositoryInMemory()
    const fakeHashPasswors = new FakeHashPassword()

    userStatsUseCase = new UserStatsUseCase(usersRepositoryInMemory)
    const createUserUseCase = new CreateUserUseCase(
      usersRepositoryInMemory,
      fakeHashPasswors
    )

    for (let i = 1; i <= 2; i++) {
      await createUserUseCase.execute({
        name: `Test ${i}`,
        email: `test${i}test.com`,
        password: 'test'
      })
    }
  })

  it('Should get user stats', async () => {
    const userStats = await userStatsUseCase.execute()

    expect(userStats[0]).toHaveProperty('_id')
    expect(userStats[0].total).toBe(2)
  })
})
