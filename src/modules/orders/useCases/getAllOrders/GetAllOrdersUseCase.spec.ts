import { OrdersRepositoryInMemory } from '@modules/orders/repositories/in-memory/OrdersRepositoryInMemory'
import { CreateOrderUseCase } from '../createOrder/CreateOrderUseCase'
import {
  customerAddress,
  orderProducts
} from '../createOrder/CreateOrderUseCase.spec'
import { GetAllOrdersUseCase } from './GetAllOrdersUseCase'

let getAllOrdersUseCase: GetAllOrdersUseCase

describe('Get all Orders', () => {
  beforeAll(async () => {
    const ordersRepositoryInMemory = new OrdersRepositoryInMemory()
    const createOrderUseCase = new CreateOrderUseCase(ordersRepositoryInMemory)

    getAllOrdersUseCase = new GetAllOrdersUseCase(ordersRepositoryInMemory)

    for (let i = 0; i < 2; i++) {
      await createOrderUseCase.execute({
        userId: `6147${i}d95293225b596bd2e40`,
        products: [orderProducts],
        amount: Number(`97${i}`),
        address: customerAddress
      })
    }
  })

  it('Should be able to get all orders', async () => {
    const result = await getAllOrdersUseCase.execute()

    expect(result.length).toBe(2)
    expect(result[0].amount).toBe(970)
  })
})
