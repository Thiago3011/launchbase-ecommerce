const User = require('../models/User')

async function post (req, res, next) {
  // check if has all fields

  const fields = Object.keys(req.body)

  for (const field of fields) {
    if (req.body[field] === '') {
      return res.render('user/register', {
        user: req.body,
        error: 'Por favor, preencha todos os campos!'
      })
    }
  }

  // check if user exists [email, cpf/cnpj]

  let { email, cpf_cnpj, password, passwordRepeat } = req.body

  cpf_cnpj = cpf_cnpj.replace(/\D/g, '')

  const user = await User.findOne({
    where: { email },
    or: { cpf_cnpj }
  })

  if (user) {
    return res.render('user/register', {
      user: req.body,
      error: 'Usuário já cadastrado!'
    })
  }

  // check if password match
  if (password !== passwordRepeat) {
    return res.render('user/register', {
      user: req.body,
      error: 'As senhas não conferem!'
    })
  }

  next()
}

module.exports = {
  post
}
