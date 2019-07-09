const express = require('express');
const router = express.Router();
//const loginValidate=require('../../lib/loginvalidate')
const waiters=require('../../controllers/waiter')





router.post('/', waiters.login);

module.exports = router;
