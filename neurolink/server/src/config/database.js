const { Pool } = require('pg')
function createPool() { if (!process.env.DATABASE_URL) return null; return new Pool({ connectionString: process.env.DATABASE_URL, ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false }) }
module.exports = { createPool }
