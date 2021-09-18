import { Router } from 'express'
import { AuthenticateUserController } from '@modules/users/useCases/authenticateUser/authenticateUserController'
import { CreateUserController } from '@modules/users/useCases/createUser/CreateUserController'
import { UpdateUserController } from '@modules/users/useCases/updateUser/UpdateUserController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { ensurePermission } from '../middlewares/ensurePermission'

const usersRoutes = Router()

const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()
const updateUserController = new UpdateUserController()

usersRoutes.post('/', createUserController.handle)
usersRoutes.post('/authenticate', authenticateUserController.handle)
usersRoutes.put(
  '/:id',
  ensureAuthenticated,
  ensurePermission,
  updateUserController.handle
)

export { usersRoutes }
