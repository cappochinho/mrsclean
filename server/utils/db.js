const { MongoClient } = require('mongodb');

class DBClient {
  constructor(
    host = process.env.DB_HOST || 'localhost',
    port = process.env.DB_PORT || 27017,
    database = process.env.DB_DATABASE || 'mrsclean',
  ) {
    this.isAlive = function isAlive() { return false; };
    MongoClient.connect(
      `mongodb://${host}:${port}/${database}`,
      { useNewUrlParser: true, useUnifiedTopology: true },
      (err, client) => {
        if (err) {
          client.close();
          return console.log(err);
        }
        this.isAlive = function isAlive() { return true; };
        this.products = client.db(database).collection('products');
        return console.log('mongoDB connected');
      }
    )
  }

  async nbProducts() {
    return this.products.countDocuments();
  }
}

module.exports = new DBClient();
