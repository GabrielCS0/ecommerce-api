import 'reflect-metadata'
import 'dotenv/config'
import '../mongoose'
import '@shared/container'
import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import { AppError } from '../../errors/AppError'
import { router } from './routes'

const app = express()

app.use(express.json())

app.use(router)

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message
    })
  }

  console.error(err)

  return res.status(500).json({
    status: 'error',
    message: 'Internal Server Error'
  })
})

export { app }
