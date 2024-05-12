// api/index.js

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@capycaldb.uojru0z.mongodb.net/CapyCalDB?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas", error);
  });

const Schema = mongoose.Schema;
const exampleSchema = new Schema({
  day: String,
  tasks: Array,
  id: Number,
});

const ExampleModel = mongoose.model('Example', exampleSchema);

app.get("/", (req, res) => {
  async function main(){
    try{
      const 
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

module.exports = app;
