# Query Processor Lambda
This repository contains the lambda code to upload an sql script run it and send an email.

## Prerequisites
* npm installed in your machine

## Installation
1. Clone the code locally
2. npm install --production
3. Package the next files/folder as a zip file.
    * /node_modules 
    * package.json
    * queryProcessor.js
    * /services
 4. Create the Lambda in AWS
 5. Upload the file
 6. Set up the next environment variables in the created lambda:
    * FR_AWS_ACCESS_KEY
    * FR_AWS_SECRET_KEY
    * FR_AWS_REGION
    * FR_DB_USERNAME
    * FR_DB_PASSWORD
    * FR_DB_HOST
    * FR_DB_NAME
    * FR_DB_PORT
    * FR_EMAIL_FROM
    * FR_EMAIL_TO
    * FR_EMAIL_SUBJECT
  7. Create an API Gateway with POST method pointing to the new lambda 

## How To Use it
Once the lambda is deployed this is the body that should be sent as a POST mesage.
```javascript
{
    data: ''
}
```
In the previous body the data corresponds to the encoded Base64 file that contains the Queries to be executed separated by semi colon.

### This is an example of a file called script.sql
```
SELECT * FROM "Users";
SELECT * FROM productos;
INSERT INTO productos (name, reference) VALUES ('test', 'testReference');
SELECT * FROM "Users";
SELECT * FROM productos;
INSERT INTO productos (name, reference) VALUES ('test', 'testReference');
SELECT * FROM "Users";
SELECT * FROM productos;
INSERT INTO productos (name, reference) VALUES ('test', 'testReference');
```

### And this is the encoded file:
U0VMRUNUICogRlJPTSAiVXNlcnMiOw0KU0VMRUNUICogRlJPTSBwcm9kdWN0b3M7DQpJTlNFUlQgSU5UTyBwcm9kdWN0b3MgKG5hbWUsIHJlZmVyZW5jZSkgVkFMVUVTICgndGVzdCcsICd0ZXN0UmVmZXJlbmNlJyk7DQpTRUxFQ1QgKiBGUk9NICJVc2VycyI7DQpTRUxFQ1QgKiBGUk9NIHByb2R1Y3RvczsNCklOU0VSVCBJTlRPIHByb2R1Y3RvcyAobmFtZSwgcmVmZXJlbmNlKSBWQUxVRVMgKCd0ZXN0JywgJ3Rlc3RSZWZlcmVuY2UnKTsNClNFTEVDVCAqIEZST00gIlVzZXJzIjsNClNFTEVDVCAqIEZST00gcHJvZHVjdG9zOw0KSU5TRVJUIElOVE8gcHJvZHVjdG9zIChuYW1lLCByZWZlcmVuY2UpIFZBTFVFUyAoJ3Rlc3QnLCAndGVzdFJlZmVyZW5jZScpOw==