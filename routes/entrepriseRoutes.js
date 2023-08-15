const express = require('express');
const router = express.Router();

const entCtrl = require('../controllers/entrepriseController');

router.get('/', entCtrl.get_all);
router.get('/:id', entCtrl.get_one);

module.exports = router;