
function createEmailObject(queryParameters) {
  const emailObject =
    {
      Source: queryParameters.emailFrom,
      Destination: { ToAddresses: queryParameters.emailTo },
      Message: {
        Subject: {
          Data: queryParameters.emailSubject,
        },
        Body: {
          Text: {
            Data: queryParameters.emailBody.text || '',
          },
        },
      },
    };
  return emailObject;
}

module.exports = {
  createEmail: createEmailObject,
};
