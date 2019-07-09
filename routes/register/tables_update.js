const express = require('express');
const router = express.Router();
const tables=require('../../controllers/table');
/* GET home page. */
//router.post('/', tables.new);
router.post('/', tables.update);


module.exports = router;
