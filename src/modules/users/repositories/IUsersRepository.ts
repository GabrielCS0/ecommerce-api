import { UserDocument } from '../infra/mongoose/schemas/User'
import { ICreateUserDTO } from '../dtos/ICreateUserDTO'

export interface IUsersRepository {
  findByEmail(email: string): Promise<UserDocument>
  create(data: ICreateUserDTO): Promise<UserDocument>
}
