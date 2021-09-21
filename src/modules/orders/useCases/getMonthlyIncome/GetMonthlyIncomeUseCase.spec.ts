import { OrdersRepositoryInMemory } from '@modules/orders/repositories/in-memory/OrdersRepositoryInMemory'
import { CreateOrderUseCase } from '../createOrder/CreateOrderUseCase'
import {
  customerAddress,
  orderProducts
} from '../createOrder/CreateOrderUseCase.spec'
import { GetMonthlyIncomeUseCase } from './GetMonthlyIncomeUseCase'

let getMonthlyIncomeUseCase: GetMonthlyIncomeUseCase

describe('Get Monthly Income', () => {
  beforeAll(async () => {
    const ordersRepositoryInMemory = new OrdersRepositoryInMemory()
    const createOrderUseCase = new CreateOrderUseCase(ordersRepositoryInMemory)
    getMonthlyIncomeUseCase = new GetMonthlyIncomeUseCase(
      ordersRepositoryInMemory
    )

    for (let i = 0; i < 2; i++) {
      await createOrderUseCase.execute({
        userId: '61470d95293225b596bd2e40',
        products: [orderProducts],
        amount: 110,
        address: customerAddress
      })
    }
  })

  it('Should be able to get monthly income', async () => {
    const result = await getMonthlyIncomeUseCase.execute()

    expect(result[0].total).toBe(220)
  })
})
