const express = require('express')
const next = require('next')

const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

const routes = require('./routes/index')
const mongoose = require('mongoose')

mongoose.connect('mongodb://2011mckinsey:Secret2015!@ds115613.mlab.com:15613/xcursions', { useNewUrlParser: true })
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});



nextApp.prepare()
.then(() => {
  const server = express()
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));

  server.use('/api/items/', routes);

  server.get('/items/:id', (req, res) => {
    const actualPage = '/item';
    const queryParams = { id: req.params.id };
    nextApp.render(req, res, actualPage, queryParams);
  });

  server.get('/update/:id', (req, res) => {
    const actualPage = '/update';
    const queryParams = { id: req.params.id };
    nextApp.render(req, res, actualPage, queryParams);
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