import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { DeleteUserUseCase } from './DeleteUserUseCase'

export class DeleteUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const deleteUserUseCase = container.resolve(DeleteUserUseCase)

    await deleteUserUseCase.execute(id)

    return res.send()
  }
}
