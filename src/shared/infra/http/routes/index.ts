import { Router } from 'express'

import { productsRoutes } from './products.routes'
import { usersRoutes } from './users.routes'

const router = Router()

router.use('/users', usersRoutes)
router.use('/products', productsRoutes)

export { router }
