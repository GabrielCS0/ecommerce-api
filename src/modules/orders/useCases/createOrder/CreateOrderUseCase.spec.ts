import { ICreateOrderDTO } from '@modules/orders/dtos/ICreateOrderDTO'
import {
  IOrderProducts,
  IStripeCustomerAddress
} from '@modules/orders/infra/mongoose/schemas/Order'
import { OrdersRepositoryInMemory } from '@modules/orders/repositories/in-memory/OrdersRepositoryInMemory'
import { CreateOrderUseCase } from './CreateOrderUseCase'

let createOrderUseCase: CreateOrderUseCase

export const orderProducts: IOrderProducts = {
  productId: '6148ed669c5542bd633bca88',
  quantity: 2
}

export const customerAddress: IStripeCustomerAddress = {
  city: 'city',
  country: 'country',
  line1: 'line1',
  line2: null,
  postal_code: 'postal code',
  state: 'state'
}

describe('Create Order', () => {
  beforeAll(() => {
    const ordersRepositoryInMemory = new OrdersRepositoryInMemory()
    createOrderUseCase = new CreateOrderUseCase(ordersRepositoryInMemory)
  })

  it('Should be able to create a new order', async () => {
    const createOrder: ICreateOrderDTO = {
      userId: '61470d95293225b596bd2e40',
      products: [orderProducts],
      amount: 100,
      address: customerAddress
    }
    const result = await createOrderUseCase.execute(createOrder)

    expect(result).toHaveProperty('_id')
  })
})
