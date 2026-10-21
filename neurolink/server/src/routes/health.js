const router = require('express').Router()
router.get('/', (req, res) => res.status(200).json({ data: { status: 'ok', service: 'neurolink-api', phase: 'foundation' } }))
module.exports = router
