const express = require('express');
const router = express.Router();
const waiter=require('../../controllers/waiter');

router.get('/',waiter.listOne )

module.exports = router;
