require('dotenv').config()
const nodemailer = require('nodemailer')

function nodeMail(emailAdress, emailTitle,  emailMessage,) {
  var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PWD
    }
  });

  var mailOptions = {
    from: process.env.EMAIL,
    to: emailAdress,
    subject: "Top Question For You To Start Your Week",
    html:
      `<h1>${emailTitle}</h1>
      <h6>${emailDescription}</h6>
      `
  }

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error)
    } else {
      console.log('success')
    }
  });
}

module.exports = nodeMail

