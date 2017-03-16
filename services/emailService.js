const aws = require('aws-sdk');
const config = require('./util/aws');
aws.config = config.credentials;
const emailValidation = require('./util/emailValidation');

const emailData = {
  emailTo: process.env.FR_EMAIL_TO.split(','),
  emailFrom: process.env.FR_EMAIL_FROM,
  emailSubject: process.env.FR_EMAIL_SUBJECT,
  emailBody: {
    text: '',
  },
};

const processEmail = (emailObject, cb) => {
  const ses = new aws.SES(config.credentials);
  ses.sendEmail(emailObject, (err, data) => {
    if (err) {
      cb(null, { message: err });
    } else {
      console.log('Email sent:');
      cb(null, { message: 'Email sent!' });
    }
  });
};

const buildEmailBody = (bodytext) => {
  emailData.emailBody.text = bodytext;
  const emailBody = emailValidation.createEmail(emailData);
  processEmail(emailBody, (err, result) => {
    console.log(' Email callback: ', err, result);
  });
};

module.exports = {
  sendEmail: processEmail,
  buildEmail: buildEmailBody,
};
