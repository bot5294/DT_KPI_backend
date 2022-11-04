const express = require("express");
const app = express(),
  bodyParser = require("body-parser");

const PORT = 5294;
// const db = require('./config/mongodb');

const mongoUtil = require("./config/mongodb");
mongoUtil.connectToserver(function (err, db) {
  if (err) console.log(err);
  app.locals.db = db;
  // app.locals.collection = db.collection("kpi_data");
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use("/", require("./routes"));
  app.listen(PORT, (err) => {
    if (err) {
      console.log(`Error in starting the server : ${err}`);
    } else {
      console.log(`Server is up and running at : http://localhost:${PORT}`);
    }
  });
});
