const Flight = require('../models/flight');

async function index(req, res) {
	try {
		const flights = await Flight.find({});
		res.render('flights/index', { flights });
	} catch (err) {
		console.log(err);
		res.redirect('/');
	}
};


async function show(req, res) {
  try {
    const flight = await Flight.findById(req.params.id);
    res.render('flights/show', { title: 'Flight Details', flight });
  } catch (err) {
    console.log(err);
    res.redirect('/flights');
  }
};

function newFlight(req, res) {
	res.render('flights/new', {errorMsg: ' '});
};

async function create(req, res) {
	const regexAirline = /^[A-Z][a-z]*$/;
  	const isCorrect = regexAirline.test(req.body.airline);
  	console.log(isCorrect);
	if(isCorrect){
		try{
    await Flight.create(req.body);
	res.redirect('/flights');
	} catch(err) {
		res.render('flights/new', { error: err.message})
	}
	} else {
		res.render('flights/new', { errorMsg: 'The airline name must start with a capital letter, followed by lowercase letters and no digits.' });
	}}

module.exports = {
	index,
	new: newFlight,
	create,
	show,
}