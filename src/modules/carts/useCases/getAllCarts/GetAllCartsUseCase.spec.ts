import { CartsRepositoryInMemory } from '@modules/carts/repositories/in-memory/CartsRepositoryInMemory'
import { CreateCartUseCase } from '../createCart/CreateCartUseCase'
import { GetAllCartsUseCase } from './GetAllCartsUseCase'

let getAllCartsUseCase: GetAllCartsUseCase

describe('Get all Carts', () => {
  beforeAll(async () => {
    const cartsRepositoryInMemory = new CartsRepositoryInMemory()
    getAllCartsUseCase = new GetAllCartsUseCase(cartsRepositoryInMemory)

    const createCartUseCase = new CreateCartUseCase(cartsRepositoryInMemory)

    for (let i = 0; i < 2; i++) {
      await createCartUseCase.execute({
        userId: `6147${i}d95293225b596bd2e40`,
        products: [
          {
            productId: '6148ed669c5542bd633bca88'
          }
        ]
      })
    }
  })

  it('Should be able to get all carts', async () => {
    const result = await getAllCartsUseCase.execute()

    expect(result.length).toBe(2)
    expect(result[0]).toHaveProperty('userId')
  })
})
