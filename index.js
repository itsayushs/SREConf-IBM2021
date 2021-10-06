const express = require("express");

const PORT = process.env.PORT || "8080";
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to SREConf@IBM");
});

app.listen(parseInt(PORT, 10), () => {
  console.log(`Listening for requests on http://localhost:${PORT}`);
});
