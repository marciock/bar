const express = require('express');
const router = express.Router();
const tables=require('../../controllers/table')


router.get('/', tables.search);


module.exports = router;
