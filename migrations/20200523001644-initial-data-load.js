
module.exports = {
  up: async (queryInterface) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    await queryInterface.bulkInsert('abouts', [
      {
        type: 'roll-out',
        batchSize: '3 dozen',
      }, {
        type: 'drop',
        batchSize: '2 dozen',
      }, {
        type: 'drop',
        batchSize: '4 dozen',
      }, {
        type: 'drop',
        batchSize: '3 dozen',
      }, {
        type: 'drop',
        batchSize: '3 dozen',
      }, {
        type: 'sandwich',
        batchSize: '2 dozen',
      }, {
        type: 'drop',
        batchSize: '2 dozen',
      }, {
        type: 'pressed',
        batchSize: '2 dozen',
      }, {
        type: 'imprint',
        batchSize: '3 dozen',
      }, {
        type: 'drop',
        batchSize: '1 dozen',
      }, {
        type: 'drop',
        batchSize: '2 dozen',
      }, {
        type: 'imprint',
        batchSize: '4 dozen',
      }, {
        type: 'rolled',
        batchSize: '3 dozen',
      }, {
        type: 'drop',
        batchSize: '2 dozen',
      }, {
        type: 'sandwich',
        batchSize: '1 dozen',
      }, {
        type: 'drop',
        batchSize: '3 dozen',
      }, {
        type: 'drop',
        batchSize: '3 dozen',
      }, {
        type: 'drop',
        batchSize: '3 dozen',
      }, {
        type: 'drop',
        batchSize: '3 dozen',
      }, {
        type: 'sandwich',
        batchSize: '2 dozen',
      }, {
        type: 'sandwich',
        batchSize: '1 dozen',
      },
    ])

    await queryInterface.bulkInsert('tags', [
      {
        tag: 'frosting',
      }, {
        tag: 'sprinkles',
      }, {
        tag: 'wheat',
      }, {
        tag: 'chocolate',
      }, {
        tag: 'raisin',
      }, {
        tag: 'filled',
      }, {
        tag: 'nuts',
      }, {
        tag: 'fruit',
      }, {
        tag: 'white chocolate',
      },
    ])

    await queryInterface.bulkInsert('cookies', [
      {
        name: 'sugar cookies',
        // eslint-disable-next-line max-len
        description: 'Soft and buttery cut out sugar cookies. Comes in fun shapes and decorated with frosting and sprinkles.',
        aboutId: '1',
      }, {
        name: 'chocolate chip cookies',
        description: 'Buttery, chewy, and thick cookies full of delicious chocolate chips.',
        aboutId: '2',
      }, {
        name: 'oatmeal raisin',
        description: 'Soft, moist, and chewy cookies loaded with raisins.',
        aboutId: '3',
      }, {
        name: 'snickerdoodle',
        description: 'Soft and chewy cookie coated in cinnamon sugar.',
        aboutId: '4',
      }, {
        name: 'brookies',
        description: 'A declicious combination of a cookie and a brownie.',
        aboutId: '5',
      }, {
        name: 'macarons',
        description: 'A sweet meringue-based coookie with a falavored filling.',
        aboutId: '6',
      }, {
        name: 'butter pecan cookies',
        description: 'Soft and buttery cookies with lots of pecans and brown sugar.',
        aboutId: '7',
      }, {
        name: 'peanut butter cookies',
        description: 'Classic soft and chewy peanut butter cookies.',
        aboutId: '8',
      }, {
        name: 'peanut butter blossom',
        description: 'Tendy peanut butter cookie topped with a delicious Hershey Kiss.',
        aboutId: '9',
      }, {
        name: 'toffee cookies',
        description: 'Sweet and salty cookie with lots of chewy toffee bits.',
        aboutId: '10',
      }, {
        name: 'M&M cookies',
        description: 'Soft cookies loaded with colorful M&Ms.',
        aboutId: '11',
      }, {
        name: 'thumbprint cookies',
        description: 'Buttery shortbread base with an imprint filled with a delivious flavored jam.',
        aboutId: '12',
      }, {
        name: 'shortbread cookies',
        description: 'Buttery and dense cookies that melt in your mouth.',
        aboutId: '13',
      }, {
        name: 'molasses cookies',
        description: 'Chewy and soft cookies full of molasses and ginger flavor.',
        aboutId: '14',
      }, {
        name: 'oatmeal cream pies',
        description: 'Soft and chewy oatmeal cookies with a creamy vanilla buttercream center.',
        aboutId: '15',
      }, {
        name: 'white cholocate macadamia nut cookies',
        description: 'Soft cookies loaded with white chocolate chips and salty macadamia nuts.',
        aboutId: '16',
      }, {
        name: 'mint chocolate chip cookies',
        description: 'Fun green cookie with lots of chocolate chips and mint flavor.',
        aboutId: '17',
      }, {
        name: 'monster cookies',
        description: 'Delicious cookie loaded with M&Ms, peanut butter, chocolate chips and oatmeal.',
        aboutId: '18',
      }, {
        name: 'mexican wedding cookies',
        description: 'Buttery, crumbly, pecan filled cookies rolled in powdered sugar.',
        aboutId: '19',
      }, {
        name: 'homemade oreos',
        description: 'Soft and fudgy cookies filled iwth a delicious vanilla frosting.',
        aboutId: '20',
      }, {
        name: 'whoopie pie',
        description: 'Pillow like chocolate cookies filled with a soft marshmellow filling.',
        aboutId: '21',
      },
    ])

    return queryInterface.bulkInsert('cookiesTags', [
      {
        cookieId: '1',
        tagsId: '1',
      }, {
        cookieId: '1',
        tagsId: '2',
      }, {
        cookieId: '1',
        tagsId: '3',
      }, {
        cookieId: '2',
        tagsId: '4',
      }, {
        cookieId: '2',
        tagsId: '3',
      }, {
        cookieId: '3',
        tagsId: '3',
      }, {
        cookieId: '3',
        tagsId: '5',
      }, {
        cookieId: '4',
        tagsId: '3',
      }, {
        cookieId: '5',
        tagsId: '4',
      }, {
        cookieId: '5',
        tagsId: '3',
      }, {
        cookieId: '6',
        tagsId: '6',
      }, {
        cookieId: '7',
        tagsId: '3',
      }, {
        cookieId: '7',
        tagsId: '7',
      }, {
        cookieId: '8',
        tagsId: '3',
      }, {
        cookieId: '8',
        tagsId: '7',
      }, {
        cookieId: '9',
        tagsId: '3',
      }, {
        cookieId: '9',
        tagsId: '7',
      }, {
        cookieId: '9',
        tagsId: '4',
      }, {
        cookieId: '10',
        tagsId: '3',
      }, {
        cookieId: '11',
        tagsId: '3',
      }, {
        cookieId: '11',
        tagsId: '4',
      }, {
        cookieId: '12',
        tagsId: '3',
      }, {
        cookieId: '12',
        tagsId: '8',
      }, {
        cookieId: '13',
        tagsId: '3',
      }, {
        cookieId: '14',
        tagsId: '3',
      }, {
        cookieId: '15',
        tagsId: '3',
      }, {
        cookieId: '16',
        tagsId: '3',
      }, {
        cookieId: '16',
        tagsId: '9',
      }, {
        cookieId: '16',
        tagsId: '7',
      }, {
        cookieId: '17',
        tagsId: '3',
      }, {
        cookieId: '17',
        tagsId: '4',
      }, {
        cookieId: '18',
        tagsId: '3',
      }, {
        cookieId: '18',
        tagsId: '4',
      }, {
        cookieId: '18',
        tagsId: '7',
      }, {
        cookieId: '19',
        tagsId: '3',
      }, {
        cookieId: '19',
        tagsId: '7',
      }, {
        cookieId: '20',
        tagsId: '3',
      }, {
        cookieId: '20',
        tagsId: '4',
      }, {
        cookieId: '21',
        tagsId: '4',
      },
    ])
  },

  down: async (queryInterface) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    await queryInterface.bulkDelete('cookiesTags')
    await queryInterface.bulkDelete('cookies')
    await queryInterface.bulkDelete('tags')

    return queryInterface.bulkDelete('about')
  }
}
