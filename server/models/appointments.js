const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  date: {
    type: Date,
    required: true,
  },
  description: String,
  confirmed: {
    type: Boolean,
    default: false,
  },
  // more fields if needed....
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
