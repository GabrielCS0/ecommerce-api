import { ICreateCartDTO } from '@modules/carts/dtos/ICreateCartDTO'
import { CartsRepositoryInMemory } from '@modules/carts/repositories/in-memory/CartsRepositoryInMemory'
import { CreateCartUseCase } from '../createCart/CreateCartUseCase'
import { DeleteCartUseCase } from './DeleteCartUseCase'

let deleteCartUseCase: DeleteCartUseCase
let createCartUseCase: CreateCartUseCase

describe('Delete Cart', () => {
  beforeAll(() => {
    const cartsRepositoryInMemory = new CartsRepositoryInMemory()
    deleteCartUseCase = new DeleteCartUseCase(cartsRepositoryInMemory)
    createCartUseCase = new CreateCartUseCase(cartsRepositoryInMemory)
  })

  it('Should be able to delete a cart', async () => {
    const createCart: ICreateCartDTO = {
      userId: '61470d95293225b596bd2e40',
      products: [
        {
          productId: '6148ed669c5542bd633bca88'
        }
      ]
    }
    const cart = await createCartUseCase.execute(createCart)
    const result = await deleteCartUseCase.execute(cart._id)

    expect(result).toBe(undefined)
  })
})
