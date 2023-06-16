const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const route2 = require('./routes/suggestions');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', routes);
app.use('/', route2);

app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
