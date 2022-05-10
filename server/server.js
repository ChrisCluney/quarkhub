const express = require("express");

const path = require("path");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 4000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

//Put endpoints here

app.listen(PORT, (err) => {
  if (err) return console.log(err);
  console.log(`Server running on port ${PORT}`);
});
