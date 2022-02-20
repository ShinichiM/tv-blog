const Tv = require('./Tv');
const Review = require('./Review');
const User = require('./User')

// TODO
// Need TV and Review Assocations
// TV hasMany Review
// Review belongTo TV

Tv.hasMany(Review, {
    foreignKey: 'tv_id',
});

Review.belongsTo(Tv, {
    foreignKey: 'tv_id',
    onDelete: 'SET NULL'
});

// TODO 
// User HasMany Review 
// Review belong to user
// Tv hasmany Review
// review belongto tv?

User.hasMany(Review, {
    foreignKey: 'user_id'
});

Review.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

User.hasMany(Tv, {
    foreignKey: 'user_id'
});

Tv.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { Tv, Review, User };