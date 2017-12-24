const express = require('express');

const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.static('dist'));

app.listen(PORT, () => { console.log('App upp on port' + PORT); });