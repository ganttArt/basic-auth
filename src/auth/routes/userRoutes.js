'use strict';

const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();

const Users = require('../models/userSchema');
const basicAuth = require('../middleware/authentication');

router.post('/signup', async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const user = new Users(req.body);
    const record = await user.save(req.body);
    res.status(200).json(record);
  } catch (e) { res.status(403).send("Error Creating User"); }
});

router.post('/signin', basicAuth, (req, res) => {
  const user = req.user;
  res.status(200).json(user);
});

module.exports = router;
