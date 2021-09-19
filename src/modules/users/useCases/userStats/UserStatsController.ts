import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UserStatsUseCase } from './UserStatsUseCase'

export class UserStatsController {
  async handle(_: Request, res: Response): Promise<Response> {
    const userStatsUseCase = container.resolve(UserStatsUseCase)

    const userStats = await userStatsUseCase.execute()

    return res.json(userStats)
  }
}
