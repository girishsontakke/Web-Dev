const express = require("express");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello World");
  console.log(req);
});

app.listen(3000);
