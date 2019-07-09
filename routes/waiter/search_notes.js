const express = require('express');
const router = express.Router();
const notes=require('../../controllers/note')


router.get('/', notes.search);


module.exports = router;
