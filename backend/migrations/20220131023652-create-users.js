'use strict'

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * add altering commands here.
         * 
         * example:
         * await queryInterface.createTable('users', {id: sequelize.INTEGER});
         */
        await queryInterface.createTable('users', {
            id: {
                type: Sequelize.INTEGER,
                primarykey: true,
                autoIncrement: true,
            },
            username: {
                type: sequelize.TEXT
            },
            password: {
                type: seuquelize.TEXT
            },
            created_at: {
                type: sequelize.DATE
            },
            update_at: {
                type: sequelize.DATE
            }
        })
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * add altering commands here.
         * 
         * example:
         * await queryInterface.dropTable('users');
         */
         await queryInterface.dropTable('users');
    }
};