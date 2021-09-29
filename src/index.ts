import express from 'express'
import http from 'http'

import dotenv from 'dotenv'
dotenv.config()

const app = express()
const server = http.createServer(app)
const PORT: number = Number(process.env.PORT) ?? 3000

server.listen(PORT, () => {
  console.log(`The server was started on the PORT: ${PORT}`)
})
