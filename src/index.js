require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

const mongoose = require('mongoose');
const app = require('./app');

const { DB_USER, DB_PASS, PORT } = process.env;
mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0-eicsh.mongodb.net/test?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
  },
);

app.listen(PORT || 5000);
