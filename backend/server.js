import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'

// Product route
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'

//initializing dotenv configurations it will make accessing constants from .env file to be called using process.env.[variabble name in .env file]
dotenv.config()

connectDB()

//initialiazing express
const app = express()

// this piece of middleware is to make routes accessible for data in body
app.use(express.json())

// make express accept response of default page and send back a respond
app.get('/', (req, res) => {
  res.send('API is running...')
})

// redirect or mount any call to this path to productRoutes methods
app.use('/api/products', productRoutes)

// redirect or mount any call to this path to userRoutes methods
app.use('/api/users', userRoutes)

// fallback for 404 i.e. anything that is not found
app.use(notFound)

// this code below is acting as a middlware and middleware is nothing but just a piece of code or fuction having access to req-res cycle and custom code as per our need

// here we are creating a custome error middleware and to oevrride existing one we use error first in our code
app.use(errorHandler)

const PORT = process.env.PORT || 5000
// make app to listen on given port number and second argument is for callback method
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
