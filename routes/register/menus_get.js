const express = require('express');
const router = express.Router();
const menus=require('../../controllers/menu');

router.get('/',menus.listOne )

module.exports = router;
