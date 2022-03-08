const express = require('express')
const mongoose  = require('mongoose')
const userModel = require('./models/userModel')
const app = express()
const port = 3000
const router = require('./routes/index')
app.use(express.json());
router(app)

mongoose
  .connect('mongodb://localhost:27017/myapp')
  .then(() => {
    console.log("connected to database");
  })  
  .catch((err) => {
    console.log(err.message);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})