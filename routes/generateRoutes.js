const express = require('express');
const router = express.Router();

const docCtrl = require('../controllers/documentController');

router.post('/pdf', docCtrl.pdf);

module.exports = router;