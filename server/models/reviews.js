const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  reviewer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  reviewedUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  rating: {
    type: Number,
    required: true,
  },
  comment: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
    // more fields if needed....
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
