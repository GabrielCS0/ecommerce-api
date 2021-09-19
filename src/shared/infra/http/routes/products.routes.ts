import { CreateProductController } from '@modules/products/useCases/createProduct/CreateProductController'
import { Router } from 'express'
import { ensureAdmin } from '../middlewares/ensureAdmin'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const productsRoutes = Router()

const createProductController = new CreateProductController()

productsRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createProductController.handle
)

export { productsRoutes }
