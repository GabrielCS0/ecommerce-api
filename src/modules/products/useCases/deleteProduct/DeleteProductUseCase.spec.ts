import { ICreateProductDTO } from '@modules/products/dtos/ICreateProductDTO'
import { ProductsRepositoryInMemory } from '@modules/products/repositories/in-memory/ProductsRepositoryInMemory'
import { CreateProductUseCase } from '../createProduct/CreateProductUseCase'
import { DeleteProductUseCase } from './DeleteProductUseCase'

let productsRepositoryInMemory: ProductsRepositoryInMemory
let deleteProductUseCase: DeleteProductUseCase
let createProductUseCase: CreateProductUseCase

describe('Delete Product', () => {
  beforeAll(() => {
    productsRepositoryInMemory = new ProductsRepositoryInMemory()
    deleteProductUseCase = new DeleteProductUseCase(productsRepositoryInMemory)
    createProductUseCase = new CreateProductUseCase(productsRepositoryInMemory)
  })

  it('Should be able to delete a product', async () => {
    const createProduct: ICreateProductDTO = {
      title: 'Test',
      desc: 'Test',
      img: 'Test',
      color: 'Test',
      price: 147
    }

    const product = await createProductUseCase.execute(createProduct)
    await deleteProductUseCase.execute(product._id)

    expect(productsRepositoryInMemory.products).toStrictEqual([undefined])
  })
})
