import { ICreateOrderDTO } from '@modules/orders/dtos/ICreateOrderDTO'
import { OrdersRepositoryInMemory } from '@modules/orders/repositories/in-memory/OrdersRepositoryInMemory'
import { CreateOrderUseCase } from '../createOrder/CreateOrderUseCase'
import {
  customerAddress,
  orderProducts
} from '../createOrder/CreateOrderUseCase.spec'
import { DeleteOrderUseCase } from './DeleteOrderUseCase'

let ordersRepositoryInMemory: OrdersRepositoryInMemory
let deleteOrderUseCase: DeleteOrderUseCase
let createOrderUseCase: CreateOrderUseCase

describe('Delete Order', () => {
  beforeAll(() => {
    ordersRepositoryInMemory = new OrdersRepositoryInMemory()
    deleteOrderUseCase = new DeleteOrderUseCase(ordersRepositoryInMemory)
    createOrderUseCase = new CreateOrderUseCase(ordersRepositoryInMemory)
  })

  it('Should be able to delete a order', async () => {
    const createOrder: ICreateOrderDTO = {
      userId: '61470d95293225b596bd2e40',
      products: [orderProducts],
      amount: 100,
      address: customerAddress
    }
    const order = await createOrderUseCase.execute(createOrder)
    const result = await deleteOrderUseCase.execute(order._id)

    expect(result).toBe(undefined)
    expect(ordersRepositoryInMemory.orders).toStrictEqual([null])
  })
})
