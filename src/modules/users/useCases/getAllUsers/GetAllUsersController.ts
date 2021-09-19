import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { GetAllUsersUseCase } from './GetAllUsersUseCase'

export class GetAllUsersController {
  async handle(req: Request, res: Response): Promise<Response> {
    const newUsers: string = req.query.newUsers as string

    const getAllUsersUseCase = container.resolve(GetAllUsersUseCase)

    const users = await getAllUsersUseCase.execute(newUsers)

    return res.json(users)
  }
}
