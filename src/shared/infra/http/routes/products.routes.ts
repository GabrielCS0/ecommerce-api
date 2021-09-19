import { CreateProductController } from '@modules/products/useCases/createProduct/CreateProductController'
import { UpdateProductController } from '@modules/products/useCases/updateProduct/UpdateProductController'
import { Router } from 'express'
import { ensureAdmin } from '../middlewares/ensureAdmin'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const productsRoutes = Router()

const createProductController = new CreateProductController()
const updateProductController = new UpdateProductController()

productsRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createProductController.handle
)
productsRoutes.put(
  '/:id',
  ensureAuthenticated,
  ensureAdmin,
  updateProductController.handle
)

export { productsRoutes }
