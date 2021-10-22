const exp = require("constants");
const express = require("express");
const path = require("path");
const app = express();

// middleware
// to get post data
app.use(express.urlencoded());
// middleware for json data
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("hello");
// });

// app.use("/", (req, res) => {
//   res.send("fuck you");
// });
// app.use can ALSO be used to send data to the data

// app.get()

// app.post()

// app.delete()

// these are just parameters

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send(req.body.name);
});

app.listen("3000", () => {
  console.log("localhost:3000");
});
