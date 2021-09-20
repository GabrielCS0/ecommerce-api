import { ICreateProductDTO } from '@modules/products/dtos/ICreateProductDTO'
import { ProductsRepositoryInMemory } from '@modules/products/repositories/in-memory/ProductsRepositoryInMemory'
import { CreateProductUseCase } from '../createProduct/CreateProductUseCase'
import { GetAllProductsUseCase } from './GetAllProductsUseCase'

let getAllProductsUseCase: GetAllProductsUseCase
let createProductUseCase: CreateProductUseCase

describe('Get all Products', () => {
  beforeAll(() => {
    const productsRepositoryInMemory = new ProductsRepositoryInMemory()

    createProductUseCase = new CreateProductUseCase(productsRepositoryInMemory)
    getAllProductsUseCase = new GetAllProductsUseCase(
      productsRepositoryInMemory
    )
  })

  it('Should be able to get all products', async () => {
    const product1: ICreateProductDTO = {
      title: 'Test',
      desc: 'Test',
      img: 'Test',
      color: 'Test',
      categories: ['Test'],
      price: 147
    }
    const product2 = {
      title: 'Test 2',
      desc: 'Test',
      img: 'Test',
      color: 'Test',
      categories: ['Test'],
      price: 147
    }

    await createProductUseCase.execute(product1)
    await createProductUseCase.execute(product2)

    const result = await getAllProductsUseCase.execute()

    expect(result.length).toBe(2)
    expect(result[1].title).toBe('Test 2')
  })

  it('Should be able to get products by category', async () => {
    const product: ICreateProductDTO = {
      title: 'Test 3',
      desc: 'Test',
      img: 'Test',
      color: 'Test',
      categories: ['Category'],
      price: 147
    }

    await createProductUseCase.execute(product)

    const result = await getAllProductsUseCase.execute('Category')

    expect(result.length).toBe(1)
    expect(result[0].title).toBe('Test 3')
  })

  it('Should be able to get new products', async () => {
    const result = await getAllProductsUseCase.execute(undefined, 'newProducts')

    expect(result.length).toBe(2)
    expect(result[0].title).toBe('Test 2')
  })
})
