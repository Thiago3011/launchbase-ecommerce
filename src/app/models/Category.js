const db = require('../../app/config/db')

module.exports = {
  all () {
    return db.query(`
            SELECT * FROM categories
        `)
  }
}
