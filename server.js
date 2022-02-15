const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers');
const session = require("express-session");
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;
const SequelizeStore = require("connect-session-sequelize")(session.Store)
// ------------------------------------------ Express-handlebars config ----------- Start
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const sess = {
    secret: "Super secret secret",
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({ db: sequelize })
}

app.use(session(sess));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// ------------------------------------------ Express-handlebars config ----------- End 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

app.listen(PORT, () => {
    console.log(`App now listening on port ${PORT}`);
    sequelize.sync({ force: false });
});
