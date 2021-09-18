import { NextFunction, Request, Response } from 'express'
import { AppError } from '@shared/errors/AppError'

export function ensureAdmin(
  req: Request,
  _: Response,
  next: NextFunction
): void {
  const { isAdmin } = req.user

  if (!isAdmin) throw new AppError("User isn't admin!", 401)

  return next()
}
