const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const userRoutes = require('./routes/users');
const expenseRoutes = require('./routes/expenses');

mongoose.connect(process.env.MONGODB_URI);

app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/expenses', expenseRoutes);

app.get('/',(req,res)=>{
    res.send("hello")
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
