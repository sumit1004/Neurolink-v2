const jwt = require('jsonwebtoken')
function authenticate(req, res, next) { const header = req.get('authorization'); if (!header?.startsWith('Bearer ')) return res.status(401).json({ error: { code:'AUTH_REQUIRED', message:'Authentication is required.' } }); try { req.user = jwt.verify(header.slice(7), process.env.JWT_SECRET); next() } catch { res.status(401).json({ error: { code:'INVALID_TOKEN', message:'Your session is invalid or expired.' } }) } }
module.exports = { authenticate }
