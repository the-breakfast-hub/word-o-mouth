const router = require("express").Router();
const { Restaurant } = require("../db/index");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const axios = require("axios");

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

router.get("/newPlace", async (req, res, next) => {
  try {
    const { data } = await axios.get(
      "https://api.foursquare.com/v2/venues/search?ll=40.7047,74.0094&client_id=5IDUOTEW20UIMVSEBNT1UJCSCBXQQB4X55DLJDE0QCK23TKT&client_secret=QWUQ4HLZKU34TZNMSCHBMYP0NZ2TUFSQX0RPX4TOTWMZ0MPN&v=20190606"
    );
    console.log(">>> ", data);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
