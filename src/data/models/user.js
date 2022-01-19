const { DataTypes, Model } = require('sequelize');

module.exports = class User extends Model {
    id
    name

    static init(sequelize, DataTypes) {
        return super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
                },
                name: {
                    type: DataTypes.string,
                    allowNull: false
                }
            },
            { sequelize }
        );
    }
}
