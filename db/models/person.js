const Sequelize = require('sequelize');

//Person Model
module.exports = (sequelize) => {
    class Person extends Sequelize.Model {}
    Person.init({
        firstName: {
            type: Sequelize.STRING(250),
            allowNull: false,
            validate: {
                notEmpty: {
                    //customized error message below
                    msg: 'You must provide a value for "firstName"',
                },
                notNull: {
                    //customized error message below
                    msg: 'You cannot leave the "firstName" empty!'
                }
            }
        },
        lastName: {
            type: Sequelize.STRING(250),
            allowNull: false,
            validate: {
                notEmpty: {
                    //customized error message below
                    msg: 'You must provide a value for "lastName"',
                },
                notNull: {
                    //customized error message below
                    msg: 'You cannot leave the "lastName" empty!'
                }
            }
        },
    }, {
        sequelize
    });

    return Person
}