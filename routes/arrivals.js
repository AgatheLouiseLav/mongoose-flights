const express= require('express');
const router = express.Router();

const flightsCtrl = require('../controllers/arrivals');

router.post('/flights/:id/arrivals', flightsCtrl.create);

module.exports = router;