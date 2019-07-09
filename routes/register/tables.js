const express = require('express');
const router = express.Router();
const tables=require('../../controllers/table');
/* GET home page. */
router.get('/', tables.listAll);

module.exports = router;
