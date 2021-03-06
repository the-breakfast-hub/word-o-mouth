const router = require('express').Router();
const { Restaurant, User, db } = require('../db/index');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const axios = require("axios");

router.get('/', async (req, res, next) => {
  try {
    const places = await Restaurant.findAll();
    res.json(places);
  } catch (error) {
    next(error);
  }
});

router.get('/:userId', async (req, res, next) => {
  try {
    const myPlaces = await Restaurant.findAll({
      include: [
        {
          model: User,
          as: 'favoriteRestaurant',
          where: {
            id: req.params.userId,
          },
        },
      ],
    });
    res.json(myPlaces);
  } catch (error) {
    next(error);
  }
});

router.get('/friends/:userId', async (req, res, next) => {
  try {
    const myFriendsPlaces = await db.query(
      ` SELECT DISTINCT r.*,places.* FROM restaurants as r JOIN favorite ON r.id="restaurantId" JOIN places ON "placeId"=places.id WHERE "userId" IN (SELECT "friendId" FROM friendship WHERE "userId"=${
        req.params.userId
      } )  `
    );
    res.json(myFriendsPlaces);
  } catch (err) {
    next(err);
  }
});

router.put('/', async (req, res, next) => {
  try {
    const found = await Restaurant.findAll({
      where: {
        name: {
          [Op.startsWith]: req.body.query,
        },
      },
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
