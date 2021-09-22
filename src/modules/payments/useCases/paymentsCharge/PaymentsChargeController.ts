import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { PaymentsChargeUseCase } from './PaymentsChargeUseCase'

export class PaymentsChargeController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { tokenId, amount } = req.body

    const paymentsChargeUseCase = container.resolve(PaymentsChargeUseCase)

    const charge = await paymentsChargeUseCase.execute({ tokenId, amount })

    return res.json(charge)
  }
}
