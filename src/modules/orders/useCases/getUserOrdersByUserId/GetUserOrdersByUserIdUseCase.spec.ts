import { OrdersRepositoryInMemory } from '@modules/orders/repositories/in-memory/OrdersRepositoryInMemory'
import { CreateOrderUseCase } from '../createOrder/CreateOrderUseCase'
import {
  customerAddress,
  orderProducts
} from '../createOrder/CreateOrderUseCase.spec'
import { GetUserOrdersByUserIdUseCase } from './GetUserOrdersByUserIdUseCase'

let getUserOrdersByUserIdUseCase: GetUserOrdersByUserIdUseCase

describe('Get User Orders', () => {
  beforeAll(async () => {
    const ordersRepositoryInMemory = new OrdersRepositoryInMemory()
    const createOrderUseCase = new CreateOrderUseCase(ordersRepositoryInMemory)
    getUserOrdersByUserIdUseCase = new GetUserOrdersByUserIdUseCase(
      ordersRepositoryInMemory
    )

    for (let i = 0; i < 2; i++) {
      await createOrderUseCase.execute({
        userId: '61470d95293225b596bd2e40',
        products: [orderProducts],
        amount: 100,
        address: customerAddress
      })
    }
  })

  it('Should be able to get user orders', async () => {
    const result = await getUserOrdersByUserIdUseCase.execute(
      '61470d95293225b596bd2e40'
    )

    expect(result.length).toBe(2)
    expect(result[0].amount).toBe(100)
  })
})
