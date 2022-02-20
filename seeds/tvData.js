const Tv = require('../models/Tv');

const tvData = [
    {
        brand: 'zenith',
        price: 1000,
        comment: 'Best television ever made',
        image_url: 'https://u-mercari-images.mercdn.net/photos/m27918932479_1.jpg?width=1024&height=1024&format=pjpg&auto=webp&fit=crop&_=1643402427',
        user_id: 1
    },
    {
        brand: 'Shrek',
        price: 5000,
        comment: 'Bless the gods for such an amazing Telly',
        image_url: 'https://i.pinimg.com/736x/94/ba/78/94ba78977f89d4fb20706a80bd19f09b.jpg',
        user_id: 2
    }
];

const seedTV = () => Tv.bulkCreate(tvData);

module.exports = seedTV;