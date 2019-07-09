const express = require('express');
const router = express.Router();
const cashiers=require('../../controllers/cashier')
//cashies.new

router.get('/',cashiers.list);


module.exports = router;
