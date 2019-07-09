const express = require('express');
const router = express.Router();
const cashiers=require('../../controllers/cashier')
//cashies.new

router.post('/',cashiers.new);


module.exports = router;
