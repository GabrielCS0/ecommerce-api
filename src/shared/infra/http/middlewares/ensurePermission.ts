import { NextFunction, Request, Response } from 'express'
import { AppError } from '@shared/errors/AppError'

export function ensurePermission(
  req: Request,
  _: Response,
  next: NextFunction
): void {
  const { id, isAdmin } = req.user
  const paramsId = req.params.userId || req.params.id

  if (paramsId === id || isAdmin) return next()

  throw new AppError('You are not alowed to do that!', 401)
}
