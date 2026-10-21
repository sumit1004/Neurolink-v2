require('dotenv').config()
const app = require('./app')
const { getPool } = require('./config/database')
const port = Number(process.env.PORT || 4000)
const server = app.listen(port, () => console.log(`NeuroLink API listening on http://localhost:${port}`))
async function shutdown(signal) {
  console.log(`${signal} received; closing NeuroLink API.`)
  server.close(async () => {
    try { if (process.env.DATABASE_URL) await getPool().end() } catch (error) { console.error('Database shutdown error:', error.message) }
    process.exit(0)
  })
  setTimeout(() => process.exit(1), 10000).unref()
}
process.once('SIGTERM', () => shutdown('SIGTERM'))
process.once('SIGINT', () => shutdown('SIGINT'))
