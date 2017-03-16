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

