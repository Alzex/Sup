const express = require('express');
const config = require('./configuration/config');
const routes = require('./routes');

const app = express();

const { port } = config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
