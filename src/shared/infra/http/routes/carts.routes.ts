import { Router } from 'express'
import { CreateCartController } from '@modules/carts/useCases/createCart/CreateCartController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { DeleteCartController } from '@modules/carts/useCases/deleteCart/DeleteCartController'
import { GetUserCartByUserIdController } from '@modules/carts/useCases/getUserCartByUserId/GetUserCartByUserIdController'
import { ensureAdmin } from '../middlewares/ensureAdmin'
import { GetAllCartsController } from '@modules/carts/useCases/getAllCarts/GetAllCartsController'

const cartsRoutes = Router()

const createCartController = new CreateCartController()
const deleteCartController = new DeleteCartController()
const getUserCartByUserIdController = new GetUserCartByUserIdController()
const getAllCartsController = new GetAllCartsController()

cartsRoutes.post('/', ensureAuthenticated, createCartController.handle)
cartsRoutes.delete('/:id', ensureAuthenticated, deleteCartController.handle)
cartsRoutes.get(
  '/find/:userId',
  ensureAuthenticated,
  getUserCartByUserIdController.handle
)
cartsRoutes.get(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  getAllCartsController.handle
)

export { cartsRoutes }
