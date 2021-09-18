import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateUserUseCase } from './UpdateUserUseCase'

export class UpdateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body
    const { id } = req.params

    const updateUserUseCase = container.resolve(UpdateUserUseCase)

    const updatedUser = await updateUserUseCase.execute({
      id,
      name,
      email,
      password
    })

    return res.json(updatedUser)
  }
}
