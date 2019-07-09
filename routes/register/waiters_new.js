const express = require('express');
const router = express.Router();
const waiters=require('../../controllers/waiter');
/* GET home page. */
//router.post('/', waiters.new);
router.post('/', waiters.new);

module.exports = router;
