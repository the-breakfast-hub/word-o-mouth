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

// Default informtion for the query search
// 40.705132,-74.009258
// ll=40.705132,-74.009258&radius=100&intent=broswe&categoryId=4bf58dd8d48988d14e941735

router.get("/", async (req, res, next) => {
  let newString = "";
  for (const key in req.query) {
    newString += `${key}=${req.query[key]}&`;
  }
  try {
    const { data } = await axios.get(
      `https://api.foursquare.com/v2/venues/search?${newString}client_id=5IDUOTEW20UIMVSEBNT1UJCSCBXQQB4X55DLJDE0QCK23TKT&client_secret=QWUQ4HLZKU34TZNMSCHBMYP0NZ2TUFSQX0RPX4TOTWMZ0MPN&v=20190606`
    );
    res.json(data.response);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
