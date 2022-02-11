const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers');

const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

// 

// ------------------------------------------ Express-handlebars config ----------- Start
const exphbs = require('express-handlebars');
const { beforeDestroy } = require('./models/Tv');
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// ------------------------------------------ Express-handlebars config ----------- End 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});

// Payments
// id 
// card_number: {
//     integer
// }
// name
// expirationdate
// user_id

// User => Bert {
//     money: 1000
// }

// TV cost = 100

// Bert.moneY - 100