const express = require('express');
const router = express.Router();
const StatusController = require('../controllers/status.controller');

router.get('/status/:type', StatusController.getStatus);

module.exports = router;
