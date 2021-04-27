'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const server = require('./src/server');

mongoose.connect('mongodb://localhost:27017/auth', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    server.start(process.env.PORT || 3001);
  })
  .catch(e => console.error('Could not start server', e.message));
