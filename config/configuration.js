import { config } from 'dotenv';


config();



const configuration = Object.freeze({
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  serviceUrl: process.env.SERVICE_URL
});

export default configuration;