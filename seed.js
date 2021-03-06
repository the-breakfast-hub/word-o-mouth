const { db } = require('./server/db');
const { green, red } = require('chalk');
const User = require('./server/db/User');
const Place = require('./server/db/Place');
const Restaurant = require('./server/db/Restaurant');
const { queryInterface } = require('sequelize');

const seed = async () => {
  await db.sync({ force: true });

  // seed your database here!
  const placeOne = await Place.create({
    address: '75 Wall St',
    city: 'New York',
    state: 'NY',
    phone: '123-456-7890',
    location: [-74.01394, 40.705137],
  });

  const placeTwo = await Place.create({
    address: '87-21 132nd St',
    city: 'Richmond Hill',
    state: 'NY',
    phone: '123-456-7890',
    location: [-74.01394, 40.705137],
  });

  const placeThree = await Place.create({
    address: '67-34 76th Rd',
    city: 'Maspeth',
    state: 'NY',
    phone: '123-456-7890',
    location: [-74.01394, 40.705137],
  });

  const placeFour = await Place.create({
    address: '6 Hanover Sq',
    city: 'New York',
    state: 'NY',
    phone: '123-456-7890',
    location: [-74.01394, 40.705137],
  });

  const restaurantOne = await Restaurant.create({
    name: 'Lennys',
    cuisine: 'American',
    placeId: 1,
  });

  const restaurantTwo = await Restaurant.create({
    name: 'Poke',
    cuisine: 'Japanese',
    placeId: 2,
  });

  const restaurantThree = await Restaurant.create({
    name: 'Wendys',
    cuisine: 'Mexican',
    placeId: 3,
  });

  const restaurantFour = await Restaurant.create({
    name: 'Pizza Boy',
    cuisine: 'Italian',
    placeId: 4,
  });

  const wagner = await User.create({
    firstName: 'Wagner',
    lastName: 'Richard',
    email: 'richard.wagner@gmail.com',
    password: 'alejfija',
    zipCode: '11418',
  });

  const amadeus = await User.create({
    firstName: 'Amadeus',
    lastName: 'Mozart',
    email: 'amadeus.mozart@hotmail.com',
    password: 'alejfija',
    zipCode: '11418',
  });

  const khalil = await User.create({
    firstName: 'Khalil',
    lastName: 'Gibran',
    email: 'khalil.gibran@yahoo.com',
    password: 'alejfija',
    zipCode: '11418',
  });

  const dorian = await User.create({
    firstName: 'Dorian',
    lastName: 'Gray',
    email: 'dorian.gray@aol.com',
    password: 'alejfija',
    zipCode: '11418',
  });

  const margaret = await User.create({
    firstName: 'Margaret',
    lastName: 'Atwood',
    email: 'margaret.atwood@gmail.com',
    password: 'alejfija',
    zipCode: '11418',
  });

  const virginia = await User.create({
    firstName: 'Virginia',
    lastName: 'Woolf',
    email: 'virginia.woolf@hotmail.com',
    password: 'alejfija',
    zipCode: '11418',
  });

  const jane = await User.create({
    firstName: 'Jane',
    lastName: 'Austen',
    email: 'jane.austen@yahoo.com',
    password: 'alejfija',
    zipCode: '11418',
  });

  const harper = await User.create({
    firstName: 'Harper',
    lastName: 'Lee',
    email: 'harper.lee@aol.com',
    password: 'alejfija',
    zipCode: '11418',
  });

  await db.queryInterface.bulkInsert('friendship', [
    { userId: 1, friendId: 2, createdAt: new Date(), updatedAt: new Date() },
    { userId: 1, friendId: 3, createdAt: new Date(), updatedAt: new Date() },
    { userId: 2, friendId: 4, createdAt: new Date(), updatedAt: new Date() },
    { userId: 3, friendId: 2, createdAt: new Date(), updatedAt: new Date() },
  ]);

  await db.queryInterface.bulkInsert('favorite', [
    {
      userId: 1,
      restaurantId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 1,
      restaurantId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 1,
      restaurantId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 2,
      restaurantId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 2,
      restaurantId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 3,
      restaurantId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);

  console.log(green('Seeding success!'));
  db.close();
};

seed().catch(err => {
  console.error(red('Oh noes! Something went wrong!'));
  console.error(err);
  db.close();
});
