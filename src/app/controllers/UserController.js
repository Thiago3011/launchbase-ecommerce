const User = require('../models/User')

module.exports = {
  registerForm (req, res) {
    return res.render('user/register')
  },
  async post (req, res) {
    try {
      return res.send('Cadastrado')
    } catch (error) {
      return console.error(error)
    }
  }
}
