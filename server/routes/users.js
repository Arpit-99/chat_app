const express = require('express');
const router = express.Router();

const User = require('../models/user');

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resources');
});

router.post('/signup', async (req, res, next) => {
  try {
    const user = new User(req.body);

    await user.save();

    res.send(user);

  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.post('/login', async (req, res, next) => {
  try {

    user = await User.findByCredentials(req.body.email, req.body.password);

    token = await user.generateAuthToken();

    res.send(user, token);

  } catch (error) {
    res.status(400).send(error);
  }
});


module.exports = router;
