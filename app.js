const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (_, res) => res.type('json').send({ hello: 'world' }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
