import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import products from './data/products.js'

//initializing dotenv configurations it will make accessing constants from .env file to be called using process.env.[variabble name in .env file]
dotenv.config()

connectDB()

//initialiazing express
const app = express()

// make express accept response of default page and send back a respond
app.get('/', (req, res) => {
  res.send('API is running...')
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

const port = process.env.PORT || 5000
// make app to listen on given port number and second argument is for callback method
app.listen(
  port,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${port}`.yellow.bold
  )
)
