const sequelize = require('../config/connection');
const seedReview = require('./reviewData');
const seedUser = require('./userData');
const seedTv = require('./tvData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedUser();

    await seedTv();

    await seedReview();


    process.exit(0);
}

seedAll();