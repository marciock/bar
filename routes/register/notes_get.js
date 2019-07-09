const express = require('express');
const router = express.Router();
const notes=require('../../controllers/note');

router.get('/',notes.listOne )

module.exports = router;
