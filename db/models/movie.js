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
            validate: {
                notEmpty: {
                    //customized error message below
                    msg: 'You must provide a value for "title"',
                },
                notNull: {
                    //customized error message below
                    msg: 'You cannot leave the "title" empty!'
                }
            },
         },
        runtime: { 
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    //customized error message below
                    msg: 'You cannot leave the "runtime" empty!'
                },
                min: {
                    args: 1,
                    msg: 'You must provide a value greater than 0 with "runtime"',
                },
                max: {
                    args: 500,
                    msg: 'No movie runs that long, you must provide a value less than 499',
                }
            },
         },
        releaseDate: { 
            type: Sequelize.DATEONLY,
            allowNull: false,
            validate: {
                notNull: {
                    //customized error message below
                    msg: 'You cannot leave the "releaseDate" empty!'
                },
                isAfter: {
                    args: '1895-12-27',
                    msg: 'Please provide a value on or after December 28th, 1895 for "releaseDate"',
                }
            },
         },
        isAvailableOnVHS: { 
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false,
         },
    }, {
        sequelize
    });

    return Movie;
}