const mongoose = require("mongoose");
const connectDB = () => {
  mongoose
    .connect("mongodb+srv://man:rL6LlQQ9QYjhQppV@cluster0.yxujymc.mongodb.net/netflix_db?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
      console.log("db connected");
    })
    .catch((err) => {
      console.log("err", err);
    });
};

module.exports = connectDB;
