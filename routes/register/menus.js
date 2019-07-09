const express = require('express');
const router = express.Router();
const menus=require('../../controllers/menu');
/* GET home page. */
router.get('/', menus.listAll);

module.exports = router;
