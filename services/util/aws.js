const accessKey = process.env.FR_AWS_ACCESS_KEY;
const secretAccessKeyId = process.env.FR_AWS_SECRET_KEY;
const regionId = process.env.FR_AWS_REGION;

const aws = {
  accessKeyId: accessKey,
  secretAccessKey: secretAccessKeyId,
  region: regionId,
};


module.exports = {
  credentials: aws,
};
