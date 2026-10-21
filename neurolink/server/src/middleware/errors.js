function notFound(req, res) { res.status(404).json({ error: { code: 'NOT_FOUND', message: 'Endpoint not found.' } }) }
function errorHandler(error, req, res, next) { console.error(error); res.status(500).json({ error: { code: 'INTERNAL_ERROR', message: 'An unexpected error occurred.' } }) }
module.exports = { notFound, errorHandler }
