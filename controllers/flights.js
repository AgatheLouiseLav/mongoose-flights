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

function newFlight(req, res) {
	res.render('flights/new', {errorMsg: ' '});
};

async function create(req, res) {
	//const isCorrect = req.body.airline.split(/^[A-Z][a-z\s]*$/);
	const regex = new RegExp('/^[A-Z][a-z\s]*$/');
	const isCorrect = regex.test(req.body.airline);
	console.log(isCorrect);
	if(isCorrect){
		try{
    await Flight.create(req.body);
	res.redirect('/flights');
	} catch(err) {
		res.render('flights/new', { error: err.message})
	}
	} else {
		res.render('flights/new', { errorMsg: 'test'})
	}
	
};

module.exports = {
	index,
	new: newFlight,
	create
}