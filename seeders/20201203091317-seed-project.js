'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        return queryInterface.bulkInsert('Contacts', [{
            title: 'iFidget Bracelet- The Fashionable & Discreet Way to Fidget!',
            description: 'The iFidget Bracelet integrates games and a range of fidget features that are always on hand.',
            category: 'Product Design',
            backers: '33',
            currency: '',
            state: 'live',
            daystogo: '2'
        }, ], {});
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        return queryInterface.bulkDelete('Projects', null, {});
    }
};