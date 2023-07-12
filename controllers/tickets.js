const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

async function create(req, res) {
  const flightId = req.params.id;
  req.body.flight = flightId;
  const flight = await Flight.findById(req.params.id);
  try {
    const ticket = await Ticket.create(req.body);
    flight.ticket.push(ticket._id);
    flight.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect('/flights/:id');
}


async function getTickets(req, res){
   // get the flight document from the db 
   const flight = await Flight.findById(req.params.id)

   // get the tickets document from the db - passing the current flight id as a filter  
   const ticket = await Ticket.find({ flight: flight._id })

  // flight.ticket.push(req.body.flightId);
   
   // render the view, sending both the flight and ticket data through
   res.render('flights/:id', { flight, ticket })
}



module.exports = {
  create,
  getTickets
};