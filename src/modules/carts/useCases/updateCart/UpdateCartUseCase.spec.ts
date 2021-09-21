import { ICreateCartDTO } from '@modules/carts/dtos/ICreateCartDTO'
import { IUpdateCartDTO } from '@modules/carts/dtos/IUpdateCartDTO'
import { CartsRepositoryInMemory } from '@modules/carts/repositories/in-memory/CartsRepositoryInMemory'
import { CreateCartUseCase } from '../createCart/CreateCartUseCase'
import { UpdateCartUseCase } from './UpdateCartUseCase'

let updateCartUseCase: UpdateCartUseCase
let createCartUseCase: CreateCartUseCase

describe('Update Cart', () => {
  beforeAll(() => {
    const cartsRepositoryInMemory = new CartsRepositoryInMemory()
    updateCartUseCase = new UpdateCartUseCase(cartsRepositoryInMemory)
    createCartUseCase = new CreateCartUseCase(cartsRepositoryInMemory)
  })

  it('Should be able to update a cart', async () => {
    const createCart: ICreateCartDTO = {
      userId: '61470d95293225b596bd2e40',
      products: [
        {
          productId: '6148ed669c5542bd633bca88'
        }
      ]
    }
    const updateCart: IUpdateCartDTO = {
      products: [
        {
          productId: '6148ed669c5542bd633bca88',
          quantity: 3
        }
      ]
    }

    const cart = await createCartUseCase.execute(createCart)
    const result = await updateCartUseCase.execute(cart._id, updateCart)

    expect(result.products[0].quantity).toBe(3)
  })
})
