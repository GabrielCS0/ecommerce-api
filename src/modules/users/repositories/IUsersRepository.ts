import { UserDocument } from '../infra/mongoose/schemas/User'
import { ICreateUserDTO } from '../dtos/ICreateUserDTO'
import { IUpdateUserDTO } from '../dtos/IUpdateUserDTO'

export interface IUsersRepository {
  findByEmail(email: string): Promise<UserDocument>
  create(data: ICreateUserDTO): Promise<UserDocument>
  findByIdAndUpdate(data: IUpdateUserDTO): Promise<UserDocument>
  findByIdAndDelete(id: string): Promise<void>
}
