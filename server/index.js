import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
const mongoUri = process.env.MONGO_URI;

mongoose.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('DB connection'))
  .catch((err) => console.log('Failure to connect: ' + err));
