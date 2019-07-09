const express = require('express');
const router = express.Router();
const tables=require('../../controllers/table');

router.get('/',tables.listOne )

module.exports = router;
