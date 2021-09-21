import { ICreateOrderDTO } from '../dtos/ICreateOrderDTO'
import { OrderDocument } from '../infra/mongoose/schemas/Order'
import { IMonthlyIncome } from '../useCases/getMonthlyIncome/GetMonthlyIncomeUseCase'

export interface IOrdersRepository {
  create(data: ICreateOrderDTO): Promise<OrderDocument>
  findByIdAndUpdate(id: string, data: ICreateOrderDTO): Promise<OrderDocument>
  findByIdAndDelete(id: string): Promise<void>
  findUserOrders(userId: string): Promise<OrderDocument[]>
  findAllOrders(): Promise<OrderDocument[]>
  getMonthlyIncome(): Promise<IMonthlyIncome[]>
}
