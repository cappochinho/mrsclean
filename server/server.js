const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api', (req, res) => {
  res.json({"users": ["userOne", "userTwo"] });
});

app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
