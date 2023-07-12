const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
		airport: String,
		arrival: Date
},{
  timestamps: true
});

const flightSchema = new Schema({
	airline: String,
	airport: String,
	flightNo: Number,
	departs: Date,
	destination: [destinationSchema],
	ticket: [{type: Schema.Types.ObjectId, ref: 'Ticket'}]
},{
  timestamps: true
});

module.exports = mongoose.model('Flight',flightSchema);