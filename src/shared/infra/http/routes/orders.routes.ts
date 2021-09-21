import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { ensureAdmin } from '../middlewares/ensureAdmin'
import { CreateOrderController } from '@modules/orders/useCases/createOrder/CreateOrderController'
import { UpdateOrderController } from '@modules/orders/useCases/updateOrder/UpdateOrderController'
import { DeleteOrderController } from '@modules/orders/useCases/deleteOrder/DeleteOrderController'

const ordersRoutes = Router()

const createOrderController = new CreateOrderController()
const updateOrderController = new UpdateOrderController()
const deleteOrderController = new DeleteOrderController()

ordersRoutes.post('/', ensureAuthenticated, createOrderController.handle)
ordersRoutes.put(
  '/:id',
  ensureAuthenticated,
  ensureAdmin,
  updateOrderController.handle
)
ordersRoutes.delete(
  '/:id',
  ensureAuthenticated,
  ensureAdmin,
  deleteOrderController.handle
)

export { ordersRoutes }
