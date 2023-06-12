const mongoose = require('mongoose');

class DBClient {
  constructor(
    host = process.env.DB_HOST || 'localhost',
    port = process.env.DB_PORT || 27017,
    database = process.env.DB_DATABASE || 'mrsclean',
  ) {
    this.isAlive = false; // Initialize isAlive to false

    mongoose.connect(`mongodb://${host}:${port}/${database}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
      .then(() => {
        this.isAlive = true; // Set isAlive to true when connected successfully
        this.products = mongoose.connection.db.collection('products');
        console.log('MongoDB connected');
      })
      .catch((err) => {
        console.error('Failed to connect to MongoDB:', err);
      });
  }

  async nbProducts() {
    if (!this.isAlive) {
      throw new Error('MongoDB connection is not alive');
    }

    return this.products.countDocuments();
  }
}

module.exports = new DBClient();
