const router = require('express').Router();
const { Restaurant, User, db } = require('../db/index');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

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

module.exports = router;
