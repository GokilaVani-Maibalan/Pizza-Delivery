const app = require("./app");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://gokilamaibalan64:Gokila%400318@cluster0.8rubk8j.mongodb.net/pizzadelivery?retryWrites=true&w=majority",
    {
      useNewUrlParser: "true",
      useUnifiedTopology: "true",
    }
  )
  .then(() => console.log("Database connected successfully!"))
  .catch((err) => console.error(err));

app.listen(8000, (req, res) => {
  console.log(`Server started in port ${process.env.PORT}`);
});

const baseURL = "http://localhost:8000";

module.exports = baseURL;
