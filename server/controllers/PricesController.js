const db = require('../utils/db');

const getPrices = async (req, res) => {
  try {
    const productData = await db.products.findOne({ name: 'greenpaste' });
    if (!productData) {
      return res.status(404).send('Product not found');
    }
    const price = productData.price;
    res.send(price);
  } catch (error) {
    console.error('Error retrieving price:', error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  getPrices,
};
