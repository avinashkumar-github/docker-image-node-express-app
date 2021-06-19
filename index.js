const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({
    statusCode: 200,
    message: "Welcome to home page!!"
  });
});

app.listen(3000, () => {
  console.log("Node server up and running!!");
});
