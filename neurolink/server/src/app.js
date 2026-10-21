const cors = require('cors')
const express = require('express')
const helmet = require('helmet')
const { notFound, errorHandler } = require('./middleware/errors')
const healthRouter = require('./routes/health')

const app = express()
app.use(helmet())
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }))
app.use(express.json({ limit: '1mb' }))
app.use('/api/v1/health', healthRouter)
app.use(notFound)
app.use(errorHandler)
module.exports = app
