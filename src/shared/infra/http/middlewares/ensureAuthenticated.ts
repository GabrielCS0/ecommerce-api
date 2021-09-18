import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import { AppError } from '@shared/errors/AppError'

interface IPayload {
  user: {
    id: string
    isAdmin: boolean
  }
}

export function ensureAuthenticated(
  req: Request,
  _: Response,
  next: NextFunction
): void {
  const authHeader = req.headers.authorization

  if (!authHeader) throw new AppError('No token provided', 401)

  const parts = authHeader.split(' ')

  if (parts.length !== 2) throw new AppError('Token error', 401)

  const [scheme, token] = parts

  if (!/^Bearer$/i.test(scheme)) throw new AppError('Malformatted token', 401)

  try {
    const { user } = verify(token, process.env.JWT_SECRET) as IPayload
    req.user = user
    return next()
  } catch (err) {
    throw new AppError('Token invalid', 401)
  }
}
