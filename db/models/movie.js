const Sequelize = require('sequelize');

//Movie Model
module.exports = (sequelize) => {
    class Movie extends Sequelize.Model {}
    Movie.init({
        //Set a customized prikary key column
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: { 
            type: Sequelize.STRING(500),
            allowNull: false,
         },
        runtime: { 
            type: Sequelize.INTEGER,
            allowNull: false,
         },
        releaseDate: { 
            type: Sequelize.DATEONLY,
            allowNull: false,
         },
        isAvailableOnVHS: { 
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false,
         },
    }, { sequelize });

    return Movie;
}