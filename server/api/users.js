const router = require("express").Router();
const { User } = require("../db");

router.get("/", async (req, res, next) => {
  const allUsers = await User.findAll();
  res.json(allUsers);
});

router.get("/:id", async (req, res, next) => {
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

router.get("/:id/friends", async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id
      }
    });
    const friends = await user.getFriends();
    if (friends) {
      res.json(friends);
    } else {
      console.log(`can't find friends`);
    }
  } catch (error) {
    next(error);
  }
});

router.post("/add", async (req, res, next) => {
  console.log(">>>>>> ", req.body);
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
