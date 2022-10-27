const express = require("express");
const app = express();

app.use("/", (req, res) => {
  res.send({
    status: 200,
    message: "Hacktober fest!"
  })
})

app.listen(4000, () => {
  console.log("Server listening on port 4000");
})
