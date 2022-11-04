const app = require('./app');
const dotenv = require('dotenv');
const cloudinary = require('cloudinary').v2;
const connectDb = require('./db');

dotenv.config();
connectDb();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at port no: ${process.env.PORT}`);
});
