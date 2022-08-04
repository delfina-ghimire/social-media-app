import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import AuthRoute from './Routes/AuthRoute.js';

//Routes
const app = express();

//Middleware
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

dotenv.config();
const { MONGO_DB, PORT } = process.env;
mongoose
  .connect(MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, console.log(`Listening at ${PORT}`)))
  .catch((error) => console.log(error));

//Uses of Routes
app.use('/auth', AuthRoute);
