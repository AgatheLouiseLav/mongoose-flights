const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

router.post('/flights/:id/ticket', ticketsCtrl.create);
router.get('/flights/:id/ticket', ticketsCtrl.getTickets);

module.exports = router;
