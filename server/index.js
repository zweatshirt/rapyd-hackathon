import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// configure dotenv to grab MangoDB connection string
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


// grab connection uri from .env file
const mongoUri = process.env.MONGO_URI;

// example of connecting to DB
mongoose.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('DB connection'))
  .catch((err) => console.log('Failure to connect: ' + err));
