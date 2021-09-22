import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { PaymentsChargeController } from '@modules/payments/useCases/paymentsCharge/PaymentsChargeController'

const paymentsRoutes = Router()

const paymentsChargeController = new PaymentsChargeController()

paymentsRoutes.post(
  '/checkout',
  ensureAuthenticated,
  paymentsChargeController.handle
)

export { paymentsRoutes }
