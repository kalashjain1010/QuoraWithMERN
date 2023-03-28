const mongoose = require("mongoose");

const url = `mongodb+srv://Kalashjain1010:Kalash9754@cluster0.46uutt7.mongodb.net/quora-clone?retryWrites=true&w=majority`;

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("mango connected");
    })
    .catch((error) => console.log("error teri mommy meri hoja:", error));
};
