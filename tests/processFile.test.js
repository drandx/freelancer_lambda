const processFile = require('../services/util/processFile');
describe('processFile.js', () => {
  it('should containe the word: SELECT after decoding', () => {
    const decoded = processFile.decode('U0VMRUNUICogRlJPTSAiVXNlcnMiOwpTRUxFQ1QgKiBGUk9NIHByb2R1Y3Rvczs=');
    expect(decoded).not.toBeNull();
    expect(decoded.includes('SELECT')).toEqual(true);
  });
});
