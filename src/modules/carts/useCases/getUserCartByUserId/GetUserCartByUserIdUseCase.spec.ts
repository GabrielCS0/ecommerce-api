import { ICreateCartDTO } from '@modules/carts/dtos/ICreateCartDTO'
import { CartsRepositoryInMemory } from '@modules/carts/repositories/in-memory/CartsRepositoryInMemory'
import { CreateCartUseCase } from '../createCart/CreateCartUseCase'
import { GetUserCartByUserIdUseCase } from './GetUserCartByUserIdUseCase'

let getUserCartByUserIdUseCase: GetUserCartByUserIdUseCase
let createCartUseCase: CreateCartUseCase

describe('Get User Cart', () => {
  beforeAll(() => {
    const cartsRepositoryInMemory = new CartsRepositoryInMemory()
    createCartUseCase = new CreateCartUseCase(cartsRepositoryInMemory)
    getUserCartByUserIdUseCase = new GetUserCartByUserIdUseCase(
      cartsRepositoryInMemory
    )
  })

  it('Should be able to get a use cart', async () => {
    const createCart: ICreateCartDTO = {
      userId: '61470d95293225b596bd2e40',
      products: [
        {
          productId: '6148ed669c5542bd633bca88'
        }
      ]
    }
    const cart = await createCartUseCase.execute(createCart)
    const result = await getUserCartByUserIdUseCase.execute(cart.userId)

    expect(result.userId).toBe(cart.userId)
  })
})
