const express = require('express')
const products = require('./data/products')

//initialiazing express
const app = express()

// make express accept response of default page and send back a respond
app.get('/', (req, res) => {
  res.send('API is running')
})

// Get all products
app.get('/api/products', (req, res) => {
  // res.json() or res.send()
  // auto converts JS object to JSON
  res.json(products)
})

// Get product by id
app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

// make app to listen on given port number and second argument is for callback method
app.listen(5000, console.log('Server running on port 5000'))
