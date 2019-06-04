const router = require("express").Router();
const { Restaurant } = require("../db/index");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

router.put("/", async (req, res, next) => {
  try {
    const found = await Restaurant.findAll({
      where: {
        name: {
          [Op.startsWith]: req.body.query
        }
      }
    });
    res.json(found);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
