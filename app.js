const Sequelize = require('sequelize');

const db = require('./db');
const { Movie } = db.models;

(async () => {
    await db.sequelize.sync({ force: true });

    try {
      await db.sequelize.authenticate();
      
      const movie = await Movie.create({ title: 'Toy Story' });
      console.log(movie.toJSON());

      const movie2 = await Movie.create({ title: 'The Matrix' });
      console.log(movie2.toJSON());

    } catch (error) {
      console.error('Error connecting to the database: ', error);
    }
  })();