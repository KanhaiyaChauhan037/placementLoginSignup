const mongoose = require("mongoose");

const connect = async () => {
  mongoose.set("strictQuery", false);
  return mongoose.connect(`mongodb+srv://kch:kch@mock-15.utcr2qa.mongodb.net/?retryWrites=true&w=majority`);
};
module.exports = connect;

// https://amber-skunk-boot.cyclic.app/user