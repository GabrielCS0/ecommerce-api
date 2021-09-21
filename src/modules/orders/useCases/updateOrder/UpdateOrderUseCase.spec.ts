import { ICreateOrderDTO } from '@modules/orders/dtos/ICreateOrderDTO'
import { OrdersRepositoryInMemory } from '@modules/orders/repositories/in-memory/OrdersRepositoryInMemory'
import { CreateOrderUseCase } from '../createOrder/CreateOrderUseCase'
import {
  customerAddress,
  orderProducts
} from '../createOrder/CreateOrderUseCase.spec'
import { UpdateOrderUseCase } from './UpdateOrderUseCase'

let updateOrderUseCase: UpdateOrderUseCase
let createOrderUseCase: CreateOrderUseCase

describe('Update Order', () => {
  beforeAll(() => {
    const ordersRepositoryInMemory = new OrdersRepositoryInMemory()
    updateOrderUseCase = new UpdateOrderUseCase(ordersRepositoryInMemory)
    createOrderUseCase = new CreateOrderUseCase(ordersRepositoryInMemory)
  })

  it('Should be able to update a order', async () => {
    const createOrder: ICreateOrderDTO = {
      userId: '61470d95293225b596bd2e40',
      products: [orderProducts],
      amount: 100,
      address: customerAddress
    }
    const updateOrder: ICreateOrderDTO = {
      userId: '61470d95293225b596bd2e40',
      products: [orderProducts],
      amount: 247,
      address: { ...customerAddress, city: 'city 2' }
    }
    const order = await createOrderUseCase.execute(createOrder)
    const result = await updateOrderUseCase.execute(order._id, updateOrder)

    expect(result.amount).toBe(247)
    expect(result.address.city).toBe('city 2')
  })
})
