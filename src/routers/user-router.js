const express = require('express')
const router = express.Router()
const userController = require('../controllers/user-controller')

router.post('/', userController.create)
router.patch('/', userController.update)
router.get('/', userController.findAll)
router.get('/:id', userController.findOne)
router.delete('/', userController.delete)

module.exports = router
