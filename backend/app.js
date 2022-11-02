const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const user = require('./routes/userRoutes');
const googleLogin = require('./routes/googleLogin');
const postRoute = require('./routes/postRoutes');

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:3000' }));
app.use('/', user);
app.use('/post', postRoute);
app.use('/', googleLogin);

app.get('/', (req, res) => {
  res.send({ message: 'Home Page' });
});

module.exports = app;
