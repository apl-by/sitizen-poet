const router = require('express').Router()
const { getPoems } = require('../controllers/poems')
router.get('/', getPoems)

module.exports = router