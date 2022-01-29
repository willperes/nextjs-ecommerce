const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');

app.use(cors({
  origin: '*'
}))

const products = JSON.parse(fs.readFileSync('./products.json'));

let port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get('/products', (req, res) => {
  res.send(products);
});

app.get('/product/:id', (req, res) => {
  let singleProduct = {};
  for (let product of products) {
    if (fruit.id === parseInt(req.params.id)) {
      singleProduct = fruit;
    }
  }
  res.send(singleProduct);
})

app.listen(port, () => {
  console.log(`Example app is listening on port http://localhost:${port}`);
});