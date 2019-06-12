const app = require("./app");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://instagram-backend:instagram-backend@cluster0-eicsh.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

app.listen(process.env.PORT || 3000);
