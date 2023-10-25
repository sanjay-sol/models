const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://.........', { useNewUrlParser: true });

// Middleware (JWT)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Routes
const users = require('./routes/users');
const messages = require('./routes/messages');
const reviews = require('./routes/reviews');
const payments = require('./routes/payments');
const appointments = require('./routes/appointments');

app.use('/api/users', users);
app.use('/api/messages', messages);
app.use('/api/reviews', reviews);
app.use('/api/payments', payments);
app.use('/api/appointments', appointments);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
