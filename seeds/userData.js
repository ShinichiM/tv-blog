const User = require('../models/User');

const userData = [
    {
        username: 'bon',
        email: 'bon@gmail.com',
        password: 'password'
    },
    {
        username: 'frog',
        email: 'frog@gmail.com',
        password: 'password'
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;