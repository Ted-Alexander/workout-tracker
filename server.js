const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
// app.use(require("./routes/api.js"));
app.use(require("./routes/index.js"));


app.get("/exercise", (req, res) => {
    res.sendFile(__dirname + "/public/exercise.html");
  });

app.get("/stats", (req, res) => {
    res.sendFile(__dirname + "/public/stats.html");
  });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
