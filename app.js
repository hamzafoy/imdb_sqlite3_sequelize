const Sequelize = require('sequelize');

const db = require('./db');
const { Movie } = db.models;

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
      })

    } catch (error) {
      console.error('Error connecting to the database: ', error);
    }
  })();