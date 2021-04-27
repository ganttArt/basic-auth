'use strict';

const express = require('express');
const app = express();

const userRoutes = require('./auth/routes/userRoutes.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(userRoutes);

module.exports = {
  server: app,
  start: port => {
    app.listen(port, () => {
      console.log(`Server running on Port: ${port}`);
    });
  }
}
