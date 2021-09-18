import { NextFunction, Request, Response } from 'express'
import { AppError } from '@shared/errors/AppError'

export function ensurePermission(
  req: Request,
  _: Response,
  next: NextFunction
): void {
  const { id, isAdmin } = req.user

  if (!(req.params.id === id) || !isAdmin) {
    throw new AppError('You are not alowed to do that!', 401)
  }

  return next()
}
