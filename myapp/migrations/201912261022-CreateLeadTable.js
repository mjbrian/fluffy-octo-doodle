'use strict';
module.exports = {
    up: (queryInterface, sequelize) => {
        return queryInterface.createTable('Leads', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: sequelize.UUID,
                defaultValue: sequelize.UUIDV4
            },
            createdAt: {
                allowNull: false,
                type: sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: sequelize.DATE
            },
            email: {
                allowNull: false,
                type: sequelize.STRING
            },
        });
    },
    down: (queryInterface, sequelize) => {
        return queryInterface.dropTable('Leads');
    }
}
