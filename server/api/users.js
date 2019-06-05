const router = require('express').Router();
const { User } = require('../db');

router.get('/', async (req, res, next) => {
  const allUsers = await User.findAll();
  res.json(allUsers);
});

router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.json(user);
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;