const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const user = require('./routes/userRoutes');
const googleLogin = require('./routes/googleLogin');
const postRoute = require('./routes/postRoutes');

dotenv.config();
var bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '50mb' }));
app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(cors({ origin: 'http://localhost:3000' }));
app.use('/', user);
app.use('/post', postRoute);
app.use('/', googleLogin);

app.get('/', (req, res) => {
  res.send({ message: 'Home Page' });
});

module.exports = app;
