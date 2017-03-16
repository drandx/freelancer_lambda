const db = require('./util/db');

const execute = (queryString, callback) => {
  const cl = db.client();
  cl.connect((err) => {
    if (err) {
      callback(err);
    }
    cl.query(queryString, (err, result) => {
      if (err) {
        callback(err);
      }
      callback(null, result);
      cl.end((err) => {
        if (err) {
          callback(err);
        }
      });
    });
  });
};

module.exports = {
  executeQuery: execute,
};
