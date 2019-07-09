const express = require('express');
const router = express.Router();
const waiters=require('../../controllers/waiter');
/* GET home page. */
router.get('/', waiters.listAll);

module.exports = router;
