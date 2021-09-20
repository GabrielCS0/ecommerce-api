import { Router } from 'express'
import { CreateCartController } from '@modules/carts/useCases/createCart/CreateCartController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const cartsRoutes = Router()

const createCartController = new CreateCartController()

cartsRoutes.post('/', ensureAuthenticated, createCartController.handle)

export { cartsRoutes }
