import { Router } from 'express'
import { AuthenticateUserController } from '@modules/users/useCases/authenticateUser/authenticateUserController'
import { CreateUserController } from '@modules/users/useCases/createUser/CreateUserController'
import { UpdateUserController } from '@modules/users/useCases/updateUser/UpdateUserController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { ensurePermission } from '../middlewares/ensurePermission'
import { DeleteUserController } from '@modules/users/useCases/deleteUser/DeleteUserController'
import { GetUserByIdController } from '@modules/users/useCases/getUserById/GetUserByIdController'
import { GetAllUsersController } from '@modules/users/useCases/getAllUsers/GetAllUsersController'
import { ensureAdmin } from '../middlewares/ensureAdmin'
import { UserStatsController } from '@modules/users/useCases/userStats/UserStatsController'

const usersRoutes = Router()

const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()
const updateUserController = new UpdateUserController()
const deleteUserController = new DeleteUserController()
const getUserByIdController = new GetUserByIdController()
const getAllUsersController = new GetAllUsersController()
const userStatsController = new UserStatsController()

usersRoutes.post('/', createUserController.handle)
usersRoutes.post('/authenticate', authenticateUserController.handle)
usersRoutes.put(
  '/:id',
  ensureAuthenticated,
  ensurePermission,
  updateUserController.handle
)
usersRoutes.delete(
  '/:id',
  ensureAuthenticated,
  ensurePermission,
  deleteUserController.handle
)
usersRoutes.get(
  '/find/:id',
  ensureAuthenticated,
  ensurePermission,
  getUserByIdController.handle
)
usersRoutes.get(
  '/all',
  ensureAuthenticated,
  ensureAdmin,
  getAllUsersController.handle
)
usersRoutes.get(
  '/stats',
  ensureAuthenticated,
  ensureAdmin,
  userStatsController.handle
)

export { usersRoutes }
