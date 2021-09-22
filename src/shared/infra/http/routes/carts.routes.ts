import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { ensureAdmin } from '../middlewares/ensureAdmin'
import { ensurePermission } from '../middlewares/ensurePermission'
import { ensureCartAlterPermission } from '../middlewares/ensureCartAlterPermission'
import { CreateCartController } from '@modules/carts/useCases/createCart/CreateCartController'
import { DeleteCartController } from '@modules/carts/useCases/deleteCart/DeleteCartController'
import { GetUserCartByUserIdController } from '@modules/carts/useCases/getUserCartByUserId/GetUserCartByUserIdController'
import { GetAllCartsController } from '@modules/carts/useCases/getAllCarts/GetAllCartsController'
import { UpdateCartController } from '@modules/carts/useCases/updateCart/UpdateCartController'

const cartsRoutes = Router()

const createCartController = new CreateCartController()
const deleteCartController = new DeleteCartController()
const getUserCartByUserIdController = new GetUserCartByUserIdController()
const getAllCartsController = new GetAllCartsController()
const updateCartController = new UpdateCartController()

cartsRoutes.post(
  '/',
  ensureAuthenticated,
  ensurePermission,
  createCartController.handle
)
cartsRoutes.delete(
  '/:id',
  ensureAuthenticated,
  ensureCartAlterPermission,
  deleteCartController.handle
)
cartsRoutes.put(
  '/:id',
  ensureAuthenticated,
  ensureCartAlterPermission,
  updateCartController.handle
)
cartsRoutes.get(
  '/find/:userId',
  ensureAuthenticated,
  ensurePermission,
  getUserCartByUserIdController.handle
)
cartsRoutes.get(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  getAllCartsController.handle
)

export { cartsRoutes }
