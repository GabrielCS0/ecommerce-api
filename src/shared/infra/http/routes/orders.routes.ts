import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { ensureAdmin } from '../middlewares/ensureAdmin'
import { ensurePermission } from '../middlewares/ensurePermission'
import { CreateOrderController } from '@modules/orders/useCases/createOrder/CreateOrderController'
import { UpdateOrderController } from '@modules/orders/useCases/updateOrder/UpdateOrderController'
import { DeleteOrderController } from '@modules/orders/useCases/deleteOrder/DeleteOrderController'
import { GetUserOrdersByUserIdController } from '@modules/orders/useCases/getUserOrdersByUserId/GetUserOrdersByUserIdController'
import { GetAllOrdersController } from '@modules/orders/useCases/getAllOrders/GetAllOrdersController'

const ordersRoutes = Router()

const createOrderController = new CreateOrderController()
const updateOrderController = new UpdateOrderController()
const deleteOrderController = new DeleteOrderController()
const getUserOrdersByUserIdController = new GetUserOrdersByUserIdController()
const getAllOrdersController = new GetAllOrdersController()

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
ordersRoutes.get(
  '/find/:userId',
  ensureAuthenticated,
  ensurePermission,
  getUserOrdersByUserIdController.handle
)
ordersRoutes.get(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  getAllOrdersController.handle
)

export { ordersRoutes }
