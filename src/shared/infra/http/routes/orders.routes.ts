import { CreateOrderController } from '@modules/orders/useCases/createOrder/CreateOrderController'
import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const ordersRoutes = Router()

const createOrderController = new CreateOrderController()

ordersRoutes.post('/', ensureAuthenticated, createOrderController.handle)

export { ordersRoutes }
