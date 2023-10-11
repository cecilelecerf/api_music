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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })