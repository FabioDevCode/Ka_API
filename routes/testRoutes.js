const express = require('express');
const router = express.Router();

// Controller
const testController = require('../controllers/testController');

// Enpoints
router.get('/test', testController.all);

module.exports = router;