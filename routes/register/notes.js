const express = require('express');
const router = express.Router();
const notes=require('../../controllers/note');
/* GET home page. */
router.get('/', notes.listAll);

module.exports = router;
