const databaseQueries = require('../services/queryService');
describe('databaseQueries.js', () => {
  it('should test the connection to a database', () => {
    expect(databaseQueries.executeQuery('SELECT * ;')).toThrow();
  });
});
