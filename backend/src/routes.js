const router = require('express').Router();

//import constrollers
const UserControllers = require('./controllers/UserController')

router.post('/create', UserControllers.create)
router.post('/login', UserControllers.login)

module.exports = router