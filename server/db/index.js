const db = require('./database');
const Place = require('./Place');
const Restaurant = require('./Restaurant');
const User = require('./User');

Restaurant.belongsTo(Place);

User.belongsToMany(Restaurant, { as: 'fan', through: 'favorite' });
Restaurant.belongsToMany(User, { as: 'favoriteRestaurant', through: 'favorite'});

User.belongsToMany(User, { as: 'friends', through: 'friendship' });

module.exports = {
  // Include your models in this exports object as well!
  db,
  Place,
  Restaurant,
  User
};