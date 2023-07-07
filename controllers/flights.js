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
	// req.body.nowShowing = !!req.body.nowShowing;
	//req.body.cast = req.body.cast.trim();
	//if(req.body.cast){
	//	req.body.cast = req.body.cast.split(/\s*,\s*/)
	//}
	try{
    await Flight.create(req.body);
	res.redirect('/flights');
	} catch(err) {
		res.render('flights/news', { error: err.message})
	}
};

module.exports = {
	index,
	new: newFlight,
	create
}