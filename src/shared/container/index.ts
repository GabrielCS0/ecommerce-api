import { container } from 'tsyringe'

import { IUsersRepository } from '@modules/users/repositories/IUsersRepository'
import { UsersRepository } from '@modules/users/infra/mongoose/repositories/UsersRepository'

import { IHashPassword } from '@modules/users/providers/hashPassword/models/IHashPassword'
import { HashPassword } from '@modules/users/providers/hashPassword/implementations/HashPassword'

import { IToken } from '@modules/users/providers/token/models/IToken'
import { Token } from '@modules/users/providers/token/implementations/Token'

import { IProductsRepository } from '@modules/products/repositories/IProductsRepository'
import { ProductsRepositort } from '@modules/products/infra/mongoose/repositories/ProductsRepository'

import { ICartsRepository } from '@modules/carts/repositories/ICartsRepository'
import { CartsRepository } from '@modules/carts/infra/mongoose/repositories/CartsRepository'

import { IOrdersRepository } from '@modules/orders/repositories/IOrdersRepository'
import { OrdersRepository } from '@modules/orders/infra/mongoose/repositories/OrdersRepository'

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
)

container.registerSingleton<IHashPassword>('HashPassword', HashPassword)

container.registerSingleton<IToken>('Token', Token)

container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepositort
)

container.registerSingleton<ICartsRepository>(
  'CartsRepository',
  CartsRepository
)

container.registerSingleton<IOrdersRepository>(
  'OrdersRepository',
  OrdersRepository
)
