const express = require('express');
const next = require('next');
const session = require('express-session');
// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const passport = require('passport');
const cookieParser = require('cookie-parser');

const routes = require('./routes/index');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
require('./handlers/passport');

mongoose.connect(`${process.env.DATABASE}`, { useNewUrlParser: true, useCreateIndex: true })
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});
 
 

nextApp.prepare()
.then(() => {
  const server = express()
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(expressValidator());
  // populates req.cookies with any cookies that came along with the request
  server.use(cookieParser());
  // This keeps users logged in and allows us to send flash messages
  server.use(session({
    secret: process.env.SECRET,
    key: process.env.KEY,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  }));
  server.use(passport.initialize());
  server.use(passport.session());
  server.use('/api/items/', routes);

  // 1 - Category Marijuana Dispensaries
  server.get('/marijuana-dispensaries', (req, res) => {
    const actualPage = '/dispensaries';
    //const queryParams = { city: req.params.city, page: '0' };
    nextApp.render(req, res, actualPage, queryParams);
  }); 

  // 2 - State
  server.get('/marijuana-dispensaries/:state', (req, res) => {
    const actualPage = '/state';
    const queryParams = { state: req.params.state, page: '0' };
    nextApp.render(req, res, actualPage, queryParams);
  }); 

  // 3 - City
  server.get('/marijuana-dispensaries/:state/:city', (req, res) => {
    const actualPage = '/city';
    const queryParams = { city: req.params.city, page: '0', state: req.params.state };
    nextApp.render(req, res, actualPage, queryParams);
  }); 

  // CITY Pagination
  server.get('/marijuana-dispensaries/:state/:city/page/:page', (req, res) => {
    const actualPage = '/city';
    const queryParams = { city: req.params.city, page: req.params.page, state: req.params.state };
    nextApp.render(req, res, actualPage, queryParams);
  });

  // CITY MAP
  // server.get('/marijuana-dispensaries/:state/:city/:id/map', (req, res) => {
  //   const actualPage = '/map';
  //   const queryParams = { city: req.params.city, id: req.params.id, state: req.params.state };
  //   nextApp.render(req, res, actualPage, queryParams);
  // });



// SINGLE ITEM
  server.get('/marijuana-dispensaries/:state/:city/:id', (req, res) => {
    const actualPage = '/item';
    const queryParams = { id: req.params.id, state: req.params.state, city: req.params.city };
    nextApp.render(req, res, actualPage, queryParams);
  });


// MAIN PAGE - PAGINATION
  server.get('/items/page/:page', (req, res) => {
    const actualPage = '/items';
    const queryParams = { page: req.params.page };
    nextApp.render(req, res, actualPage, queryParams);
  });

  // ADMIN ROUTES
  // CLUB UPDATE
  server.get('/update/:id', (req, res) => {
    const actualPage = '/update';
    const queryParams = { id: req.params.id };
    nextApp.render(req, res, actualPage, queryParams);
  });

  server.get('/login', (req, res) => {
    const actualPage = '/login';
    nextApp.render(req, res, actualPage);
  });


  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(PORT, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${PORT}`)
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})