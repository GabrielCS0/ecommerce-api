import { Router } from 'express'
import { CreateCartController } from '@modules/carts/useCases/createCart/CreateCartController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { DeleteCartController } from '@modules/carts/useCases/deleteCart/DeleteCartController'

const cartsRoutes = Router()

const createCartController = new CreateCartController()
const deleteCartController = new DeleteCartController()

cartsRoutes.post('/', ensureAuthenticated, createCartController.handle)
cartsRoutes.delete('/:id', ensureAuthenticated, deleteCartController.handle)

export { cartsRoutes }
