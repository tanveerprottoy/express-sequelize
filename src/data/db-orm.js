const { Sequelize } = require('sequelize')
const constants = require('../utils/constants')
const User = require('../data/models/user');

class DBOrm {
    constructor() {
        this.sequelize = new Sequelize(`${constants.DB_NAME}`, `${constants.DB_USER}`, `${constants.DB_PASS}`, {
            host: `${constants.DB_SERVER}`,
            port: `${constants.DB_PORT}`,
            dialect: 'postgres' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
        })
        this.models = [
            // User,
            User.init(sequelize, Sequelize)
        ]
        // this.models.map(model => model.init(this.sequelize));
        this.testConnection()
    }

    testConnection() {
        try {
            await this.sequelize.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
}

module.exports = new DBOrm;