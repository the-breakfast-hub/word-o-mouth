const router = require('express').Router();
const { User } = require('./db');
module.exports = router;

router.get('/me', async (req, res, next) => {
  try {
    if (!req.session.userId) {
      next();
    } else {
      const user = await User.findByPk(req.session.userId);
      user ? res.json(user) : next();
    }
  } catch (err) {
    next(err);
  }
});

router.put('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
        password: req.body.password,
      },
    });
    if (user) {
      req.session.userId = user.id;
      res.json(user);
    } else {
      const err = new Error('Invalid Email & Password');
      err.status = 401;
      next(err);
    }
  } catch (err) {
    next(err);
  }
});
router.delete('/logout', (req, res, next) => {
  req.session.destroy();
  res.status(204).end();
});