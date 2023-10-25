const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
  payer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  payee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  amount: {
    type: Number,
    required: true,
  },
  description: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
    // more fields if needed....
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
