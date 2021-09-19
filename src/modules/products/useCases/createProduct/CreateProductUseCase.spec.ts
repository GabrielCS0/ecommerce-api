import { ICreateProductDTO } from '@modules/products/dtos/ICreateProductDTO'
import { ProductsRepositoryInMemory } from '@modules/products/repositories/in-memory/ProductsRepositoryInMemory'
import { AppError } from '@shared/errors/AppError'
import { CreateProductUseCase } from './CreateProductUseCase'

let createProductUseCase: CreateProductUseCase

describe('Create Product', () => {
  beforeAll(() => {
    const productsRepositoryInMemory = new ProductsRepositoryInMemory()
    createProductUseCase = new CreateProductUseCase(productsRepositoryInMemory)
  })

  it('Should be able to create a new Product', async () => {
    const createProduct: ICreateProductDTO = {
      title: 'Test',
      desc: 'Test',
      img: 'Test',
      color: 'Test',
      price: 147
    }

    const product = await createProductUseCase.execute(createProduct)

    expect(product).toHaveProperty('_id')
  })

  it('Should not be able to create a new product with the same title', async () => {
    const createProduct: ICreateProductDTO = {
      title: 'Test',
      desc: 'Test 2',
      img: 'Test',
      color: 'Test',
      price: 147
    }

    await expect(
      createProductUseCase.execute(createProduct)
    ).rejects.toBeInstanceOf(AppError)
  })
})
