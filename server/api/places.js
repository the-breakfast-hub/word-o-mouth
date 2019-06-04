const router = require("express").Router();
const { Place } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const found = await Place.findAll();
    console.log(">>> ", found);
    res.json(found);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
