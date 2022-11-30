const express = require('express');
const cors = require('cors');
const AuthRoute =  require('./routes/AuthRoute.js');
const BookRoute =  require('./routes/BookRoute.js');
const CartRoute =  require('./routes/CartRoute.js');
const LoanRoute =  require('./routes/LoanRoute.js');
const CategoryRoute =  require('./routes/CategoryRoute.js');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(AuthRoute, BookRoute, CartRoute, LoanRoute, CategoryRoute);

app.listen(5000, () => {
    console.log('Server up and running at localhost with port 5000');
  });