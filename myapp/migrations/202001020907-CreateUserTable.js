'use strict';
module.exports = {
  up: (queryInterface, sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: sequelize.UUID,
        defaultValue: sequelize.UUIDV4,
      },
      createdAt: {
        allowNull: false,
        type: sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: sequelize.DATE
      },
      username: {
        allowNull: true,
        type: sequelize.STRING
      },
      firstname: {
        allowNull: true,
        type: sequelize.STRING
      },
      lastname: {
        allowNull: true,
        type: sequelize.STRING
      },
      password: {
        allowNull: true,
        type: sequelize.STRING
      },
      email: {
      	allowNull: false,
      	type: sequelize.STRING
      },
    })
  },
  down: (queryInterface, sequelize) => {
    return queryInterface.dropTable('Users');
  }
};