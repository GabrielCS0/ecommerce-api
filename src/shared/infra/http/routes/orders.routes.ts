import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { ensureAdmin } from '../middlewares/ensureAdmin'
import { CreateOrderController } from '@modules/orders/useCases/createOrder/CreateOrderController'
import { UpdateOrderController } from '@modules/orders/useCases/updateOrder/UpdateOrderController'

const ordersRoutes = Router()

const createOrderController = new CreateOrderController()
const updateOrderController = new UpdateOrderController()

ordersRoutes.post('/', ensureAuthenticated, createOrderController.handle)
ordersRoutes.put(
  '/:id',
  ensureAuthenticated,
  ensureAdmin,
  updateOrderController.handle
)

export { ordersRoutes }
