const { MongoClient } = require("mongodb");
// Database Name
const dbName = "DT_KPI_backend";
// Connection URL
const url = `mongodb://localhost:27017/${dbName}`;

module.exports = {
  connectToserver: function (callback) {
    MongoClient.connect(url, function (err, client) {
      if (err) throw err;
      console.log(`Connected to db`);
      const db = client.db(dbName);
      return callback(err, db);
    });
  },
};
