const { db } = require('./server/db');
const { green, red } = require('chalk');
const User = require('./server/db/User');
const Place = require('./server/db/Place');
const Restaurant = require('./server/db/Restaurant');

const seed = async () => {
  await db.sync({ force: true });

  // seed your database here!
  const placeOne = await Place.create({
    address: '75 Wall St',
    city: 'New York',
    state: 'NY',
    phone: '123-456-7890',
    location: [-74.01394, 40.705137]
  });

  const placeTwo = await Place.create({
    address: '87-21 132nd St',
    city: 'Richmond Hill',
    state: 'NY',
    phone: '123-456-7890',
    location: [-74.01394, 40.705137]
  });

  const placeThree = await Place.create({
    address: '67-34 76th Rd',
    city: 'Maspeth',
    state: 'NY',
    phone: '123-456-7890',
    location: [-74.01394, 40.705137]
  });

  const placeFour = await Place.create({
    address: '6 Hanover Sq',
    city: 'New York',
    state: 'NY',
    phone: '123-456-7890',
    location: [-74.01394, 40.705137]
  });

  const restaurantOne = await Restaurant.create({
    name: 'Lennys',
    cuisine: 'American',
    placeId: 1
  })

  const restaurantTwo = await Restaurant.create({
    name: 'Poke',
    cuisine: 'Japanese',
    placeId: 2
  })

  const restaurantThree = await Restaurant.create({
    name: 'Wendys',
    cuisine: 'Mexican',
    placeId: 3,
  })

  const restaurantFour = await Restaurant.create({
    name: 'Pizza Boy',
    cuisine: 'Italian',
    placeId: 4
  })

  const wagner = await User.create({
    firstName: 'Wagner',
    lastName: 'Richard',
    email: 'richard.wagner@gmail.com'
  });

  const amadeus = await User.create({
    firstName: 'Amadeus',
    lastName: 'Mozart',
    email: 'amadeus.mozart@hotmail.com'
  });

  const khalil = await User.create({
    firstName: 'Khalil',
    lastName: 'Gibran',
    email: 'khalil.gibran@yahoo.com'
  });

  const dorian = await User.create({
    firstName: 'Dorian',
    lastName: 'Gray',
    email: 'dorian.gray@aol.com'
  });

  const margaret = await User.create({
    firstName: 'Margaret',
    lastName: 'Atwood',
    email: 'margaret.atwood@gmail.com'
  });

  const virginia = await User.create({
    firstName: 'Virginia',
    lastName: 'Woolf',
    email: 'virginia.woolf@hotmail.com'
  });

  const jane = await User.create({
    firstName: 'Jane',
    lastName: 'Austen',
    email: 'jane.austen@yahoo.com'
  });

  const harper = await User.create({
    firstName: 'Harper',
    lastName: 'Lee',
    email: 'harper.lee@aol.com'
  });


  // const titan = await Campus.create({
  //   firstName: ,
  //   lastName: ,
  //   email: ,
  // });

  // const margaret = await Student.create({
  //   firstName: 'Margaret',
  //   lastName: 'Atwood',
  //   email: 'margaret.atwood@gmail.com',
  //   imageUrl: 'https://i.imgur.com/kBJ70Ve.png',
  //   gpa: 3.9,
  //   major: 'Business Administration',
  //   campusId: luna.id
  // });

  console.log(green('Seeding success!'));
  db.close();
};

seed().catch(err => {
  console.error(red('Oh noes! Something went wrong!'));
  console.error(err);
  db.close();
});
