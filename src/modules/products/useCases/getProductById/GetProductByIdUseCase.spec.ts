import { ICreateProductDTO } from '@modules/products/dtos/ICreateProductDTO'
import { ProductsRepositoryInMemory } from '@modules/products/repositories/in-memory/ProductsRepositoryInMemory'
import { CreateProductUseCase } from '../createProduct/CreateProductUseCase'
import { GetProductByIdUseCase } from './GetProductByIdUseCase'

let getProductByIdUseCase: GetProductByIdUseCase
let createProductUseCase: CreateProductUseCase

describe('Get Product By Id', () => {
  beforeAll(async () => {
    const productsRepositoryInMemory = new ProductsRepositoryInMemory()
    getProductByIdUseCase = new GetProductByIdUseCase(
      productsRepositoryInMemory
    )
    createProductUseCase = new CreateProductUseCase(productsRepositoryInMemory)
  })

  it('Should be able to get a product by id', async () => {
    const createProduct: ICreateProductDTO = {
      title: 'Test',
      desc: 'Test',
      img: 'Test',
      color: 'Test',
      price: 147
    }

    const product = await createProductUseCase.execute(createProduct)
    const productFound = await getProductByIdUseCase.execute(product._id)

    expect(productFound).toBe(product)
  })
})
