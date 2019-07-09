const express = require('express');
const router = express.Router();
const notes=require('../../controllers/note');
/* GET home page. */
//router.post('/', waiters.new);
router.post('/', notes.update);


module.exports = router;
