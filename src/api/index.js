const express = require('express');
const status = require('./status');
const version = require('./version');

const router = express.Router();

router.use('/status', status);
router.use('/version', version);

module.exports = router;
