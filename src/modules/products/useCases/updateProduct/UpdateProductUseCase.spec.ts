import { ICreateProductDTO } from '@modules/products/dtos/ICreateProductDTO'
import { ProductsRepositoryInMemory } from '@modules/products/repositories/in-memory/ProductsRepositoryInMemory'
import { CreateProductUseCase } from '../createProduct/CreateProductUseCase'
import { UpdateProductUseCase } from './UpdateProductUseCase'

let updateProductUseCase: UpdateProductUseCase
let createProductUseCase: CreateProductUseCase

describe('Update Product', () => {
  beforeAll(() => {
    const productsRepositoryInMemory = new ProductsRepositoryInMemory()
    updateProductUseCase = new UpdateProductUseCase(productsRepositoryInMemory)
    createProductUseCase = new CreateProductUseCase(productsRepositoryInMemory)
  })

  it('Should be able to update a product', async () => {
    const createProduct: ICreateProductDTO = {
      title: 'Test',
      desc: 'Test',
      img: 'Test',
      color: 'Test',
      price: 147
    }

    const product = await createProductUseCase.execute(createProduct)

    const result = await updateProductUseCase.execute(product._id, {
      title: 'Update Test',
      desc: 'Test',
      img: 'Test',
      color: 'Test',
      price: 197
    })

    expect(result.title).toBe('Update Test')
    expect(result.price).toBe(197)
  })
})
