function notFound(req, res) { res.status(404).json({ error: { code: 'NOT_FOUND', message: 'Endpoint not found.' } }) }
function errorHandler(error, req, res, next) { const status = error.status || (error.code === '23505' ? 409 : error.code === '23503' ? 409 : 500); if (status >= 500) console.error(error.message); res.status(status).json({ error: { code: error.code || 'INTERNAL_ERROR', message: status >= 500 ? 'An unexpected error occurred.' : error.message, details: error.details } }) }
module.exports = { notFound, errorHandler }
