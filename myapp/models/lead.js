'use strict';

module.exports = (sequelize, DataTypes) => {
    const Lead = sequelize.define('Lead', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        email: {
            allowNull: false,
            type: DataTypes.STRING
        }
    });
    return Lead;
}