const express = require('express');
const app = express();
const port = 3001;

const mongoose = require ("mongoose");

//avec une install local
mongoose.connect('mongodb://mongo/apinode')

//avec docker (mongodb://nomDuContainer/NomdeLaBDD)
// mongoose.connect('mongodb://mongo/apinode')

app.use(express.urlencoded());
app.use(express.json());

const musicRoute = require('./routes/musicRoute');
app.use('/music', musicRoute);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })