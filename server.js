const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
  res.status(200).send("HELLO, I´M DEPLOYED ON VERCEL!!");
});

app.listen(process.env.PORT || 3000, () =>
  console.log("Server is up and running")
);
