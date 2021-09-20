import { ICreateCartDTO } from '@modules/carts/dtos/ICreateCartDTO'
import { CartsRepositoryInMemory } from '@modules/carts/repositories/in-memory/CartsRepositoryInMemory'
import { ProductsRepositoryInMemory } from '@modules/products/repositories/in-memory/ProductsRepositoryInMemory'
import { CreateProductUseCase } from '@modules/products/useCases/createProduct/CreateProductUseCase'
import { FakeHashPassword } from '@modules/users/providers/hashPassword/fakes/FakeHashPassword'
import { UsersRepositoryInMemory } from '@modules/users/repositories/in-memory/UsersRepositoryInMemory'
import { CreateUserUseCase } from '@modules/users/useCases/createUser/CreateUserUseCase'
import { CreateCartUseCase } from './CreateCartUseCase'

let createCartUseCase: CreateCartUseCase
let createUserUseCase: CreateUserUseCase
let createProductUseCase: CreateProductUseCase

describe('Create Cart', () => {
  beforeAll(() => {
    const cartsRepositoryInMemory = new CartsRepositoryInMemory()
    const usersRepositoryInMemory = new UsersRepositoryInMemory()
    const fakeHashPassword = new FakeHashPassword()
    const productsRepositoryInMemory = new ProductsRepositoryInMemory()

    createCartUseCase = new CreateCartUseCase(cartsRepositoryInMemory)
    createProductUseCase = new CreateProductUseCase(productsRepositoryInMemory)
    createUserUseCase = new CreateUserUseCase(
      usersRepositoryInMemory,
      fakeHashPassword
    )
  })

  it('Should be able to create a new cart', async () => {
    const user = await createUserUseCase.execute({
      name: 'Test',
      email: 'test@test.com',
      password: 'test'
    })
    const product = await createProductUseCase.execute({
      title: 'Test',
      desc: 'Test',
      img: 'Test',
      price: 147
    })

    const cart: ICreateCartDTO = {
      userId: user._id,
      products: [
        {
          productId: product._id
        }
      ]
    }

    const result = await createCartUseCase.execute(cart)

    expect(result).toHaveProperty('_id')
    expect(result.userId).toBe(user._id)
  })
})
