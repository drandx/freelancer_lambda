
const queryService = require('./services/queryService');
const emailService = require('./services/emailService');
const processFile = require('./services/util/processFile');

exports.queyProcessorHandler = (event, context, callback) => {
  if (event.data) {
    const query = processFile.decode(event.data);
    queryService.executeQuery(query, (error, result) => {
      if (error) {
        callback(error);
      } else {
        emailService.buildEmail(`Queries successfully executed: \n${query}`);
        callback(null, 'success');
      }
    });
  } else {
    const error = {
      statusCode: 400,
      success: false,
      message: 'Invalid body',
    };
    context.fail();
    callback(null, error);
  }
};
