'use strict';
const LeadsTable = {
    name: 'Leads',
    GetModel: (sequelize) => {
        return {
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
        }
    }
}

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable(LeadsTable.name, LeadsTable.GetModel(Sequelize));
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable(LeadsTable.name);
    }
}
