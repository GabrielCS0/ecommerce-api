import { CreateProductController } from '@modules/products/useCases/createProduct/CreateProductController'
import { DeleteProductController } from '@modules/products/useCases/deleteProduct/DeleteProductController'
import { UpdateProductController } from '@modules/products/useCases/updateProduct/UpdateProductController'
import { Router } from 'express'
import { ensureAdmin } from '../middlewares/ensureAdmin'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const productsRoutes = Router()

const createProductController = new CreateProductController()
const updateProductController = new UpdateProductController()
const deleteProductController = new DeleteProductController()

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
productsRoutes.delete(
  '/:id',
  ensureAuthenticated,
  ensureAdmin,
  deleteProductController.handle
)

export { productsRoutes }
