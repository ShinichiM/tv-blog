const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers');

const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

// 
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
}
// ------------------------------------------ Express-handlebars config ----------- Start
const exphbs = require('express-handlebars');
const { beforeDestroy } = require('./models/Tv');
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// ------------------------------------------ Express-handlebars config ----------- End 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sess));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});