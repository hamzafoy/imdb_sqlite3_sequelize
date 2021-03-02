const Sequelize = require('sequelize');

const db = require('./db');
const { Movie, Person } = db.models;

(async () => {
    await db.sequelize.sync({ force: true });

    try {
      await db.sequelize.authenticate();
      
      const movie = await Movie.create({
        title: 'Toy Story',
        runtime: 81,
        releaseDate: '1995-11-22',
        isAvailableOnVHS: true,
      });

      const movie2 = await Movie.create({
        title: 'Padmaavat',
        runtime: 164,
        releaseDate: '2018-01-25',
        isAvailableOnVHS: false,
      });

      const movie3 = await Movie.create({
        title: 'The Shawshank Redemption',
        runtime: 142,
        releaseDate: '1994-09-22',
        isAvailableOnVHS: true,
      });

      const movie4 = await Movie.create({
        title: 'Mein Hoon Na',
        runtime: 182,
        releaseDate: '2004-04-30',
        isAvailableOnVHS: false,
      });

      const person = await Person.create({
        firstName: 'Hamza',
        lastName: 'Foy'
      });

      const person2 = await Person.create({
        firstName: 'Youssef',
        lastName: 'Almoctar'
      });

      //Running a READ OPERATION with Sequelize finder methods
      const movieById = await Movie.findByPk(3);
      console.log(movieById.toJSON());

    } catch (error) {
      if (error.name === 'SequelizeValidationError') {
        const errors = error.errors.map(err => err.message);
        console.error('Validation errors: ', errors);
      } else {
        throw error;
      }
    }
  })();