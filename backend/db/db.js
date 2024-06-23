const mongoose = require("mongoose");

// const db = async () => {
//   try {
//     mongoose.set("strictQuery", false);
//     await mongoose.connect(process.env.MONGO_URL);
//   } catch (error) {
//     console.log("DB Connection Error");
//   }
// };
require("dotenv").config();
mongoose
  .connect("mongodb+srv://Vishnu:stan1234@cluster0.u0lyso6.mongodb.net/", {
    useNewUrlParser: true,
  })
  .then((res) => {
    console.log("db connnected");
  })
  .catch((err) => {
    console.error("err connection", err);
  });
