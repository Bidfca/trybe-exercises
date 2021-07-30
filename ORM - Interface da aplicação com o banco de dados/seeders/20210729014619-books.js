'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('Books', [
      {
        title: 'Harry Potter and the Deathly Hallows',
        author: 'J. K. Rowling',
        pageQuantity: 607,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        title: 'Le Petit Prince',
        author: 'Antoine de Saint-Exupéry',
        pageQuantity: 96,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('Books', null, {}),
};
