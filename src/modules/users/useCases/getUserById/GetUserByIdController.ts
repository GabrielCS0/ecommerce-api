import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { GetUserByIdUseCase } from './GetUserByIdUseCase'

export class GetUserByIdController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const getUserByIdUseCase = container.resolve(GetUserByIdUseCase)

    const user = await getUserByIdUseCase.execute(id)

    return res.json(user)
  }
}
