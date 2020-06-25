const nodemailer = require('nodemailer')

module.exports = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '53ce696a237774',
    pass: '0188a1377fc8e0'
  }
})
