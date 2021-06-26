import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './users.js'
import morgan from 'morgan';
import exphbs from 'express-handlebars';

// configure dotenv to grab MangoDB connection string
dotenv.config();
// connection port
const PORT = process.env.PORT || 3000;


// init app
const app = express();

if (process.env.MODE === 'development') {
  // provides additional debug info in console
  app.use(morgan('dev'));
}

// handlebars view engine, also sets extension to .hbs
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors());

app.use('/user', userRoutes);
// app.use('/posts', postRoutes);


// grab connection uri from .env file
const mongoUri = process.env.MONGO_URI;

// example of connecting to DB
mongoose.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('DB connection successful');
    app.listen(PORT);
  })
  .catch((err) => 
    console.log('Failure to connect: ' + err));

  