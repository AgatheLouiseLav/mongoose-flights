const Ticket = require('../models/ticket');
const Flight = require('../models/flight')

async function create(req, res) {

  try {
    const ticket = await Ticket.create(req.body);
    console.log(ticket)
  } catch (err) {
    console.log(err);
  }

  res.redirect('/flights/:id');
}


async function getTickets(req, res){
   // get the flight document from the db 
   const flight = await Flight.findById(req.params.id)

   // get the tickets document from the db - passing the current flight id as a filter  
   const tickets = await Tickets.find({ flight: flight._id })
   
   // render the view, sending both the flight and ticket data through
   res.render('myView/index', { flight, tickets })
}



module.exports = {
  create,
  getTickets
};