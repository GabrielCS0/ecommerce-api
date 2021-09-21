import { Router } from 'express'
import { CreateCartController } from '@modules/carts/useCases/createCart/CreateCartController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { DeleteCartController } from '@modules/carts/useCases/deleteCart/DeleteCartController'
import { GetUserCartByUserIdController } from '@modules/carts/useCases/getUserCartByUserId/GetUserCartByUserIdController'

const cartsRoutes = Router()

const createCartController = new CreateCartController()
const deleteCartController = new DeleteCartController()
const getUserCartByUserIdController = new GetUserCartByUserIdController()

cartsRoutes.post('/', ensureAuthenticated, createCartController.handle)
cartsRoutes.delete('/:id', ensureAuthenticated, deleteCartController.handle)
cartsRoutes.get(
  '/find/:userId',
  ensureAuthenticated,
  getUserCartByUserIdController.handle
)

export { cartsRoutes }
