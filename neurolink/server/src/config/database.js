const { Pool } = require('pg')
let pool
function getPool() {
  if (pool) return pool
  if (!process.env.DATABASE_URL) throw Object.assign(new Error('DATABASE_URL is not configured.'), { status: 503, code: 'DATABASE_UNAVAILABLE' })
  pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false, max: Number(process.env.DB_POOL_SIZE || 10) })
  pool.on('error', error => console.error('Unexpected PostgreSQL pool error:', error.message))
  return pool
}
async function query(text, params) { return getPool().query(text, params) }
async function transaction(work) { const client = await getPool().connect(); try { await client.query('BEGIN'); const result = await work(client); await client.query('COMMIT'); return result } catch (error) { await client.query('ROLLBACK'); throw error } finally { client.release() } }
module.exports = { getPool, query, transaction }
