const express = require('express');
const router = express.Router();
const menus=require('../../controllers/menu');
/* GET home page. */
//router.post('/', waiters.new);
router.post('/', menus.new);

module.exports = router;
