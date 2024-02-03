const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:2707";
console.log("Check");

const connectToMongo=async()=> {
  await mongoose.connect(mongoURI)
  .then(()=> console.log("Connected to Mongo Successfully"))
  .catch((err) => console.log(err));
}

module.exports = connectToMongo;
