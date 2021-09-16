import 'dotenv/config'
import express from 'express'
import '../mongoose'

const app = express()

app.use(express.json())

export { app }
