const app = require('./app');
const dotenv = require('dotenv');
const connectDb = require('./db');

dotenv.config();
connectDb();

app.listen(process.env.PORT, () => {
  console.log(`Server is running at port no: ${process.env.PORT}`);
});
