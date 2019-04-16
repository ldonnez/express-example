'use strict';

const mongoose = require('mongoose');

const config = require('./config');

console.log('Attempting to connect to DB.');
mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true }, err => {
  if (err) {
    console.log(err);
  }
});

mongoose.connection.on('connected', () => {
  console.log('Connected to DB');
});

const gracefulExit = () => {
  mongoose.connection.close(() => {
    console.log('Closing Mongo connection');
    process.exit(0);
  });
};

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);
