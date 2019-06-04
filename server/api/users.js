const router = require("express").Router();
const { User } = require("../db");

router.post("/add", async (req, res, next) => {
  try {
    const newUSer = await User.create(req.body);
    res.json(newUSer);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
