import 'dotenv/config'
import express, { Request, Response, NextFunction } from 'express'
import '../mongoose'
import { AppError } from '../../errors/AppError'

const app = express()

app.use(express.json())

export { app }

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
