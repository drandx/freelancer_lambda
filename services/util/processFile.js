const decodeData = (endodedString) => {
  const buffer = new Buffer(endodedString, 'base64');
  const result = buffer.toString('UTF-8');
  return result;
};

module.exports = {
  decode: decodeData,
};
