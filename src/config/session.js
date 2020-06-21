const session = require('express-session')
const PgSession = require('connect-pg-simple')(session)
const db = require('./db')

module.exports = session({
  store: new PgSession({
    pool: db
  }),
  secret: 'interstellar',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 30 * 24 * 60 * 60 * 1000
  }
})
