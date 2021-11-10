import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

// This file is not linked with server.js i.e.main calling file to start backend server soo all setups needs to be done again like:

// initialize dotenv
dotenv.config()

// connect to database
connectDB()

// this is to clean DB and add hardcoded records from files in data folder
const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(users)

    const adminUser = createdUsers[0]._id

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser }
    })

    await Product.insertMany(sampleProducts)

    console.log('Data Imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.log(`Error: ${error.message}`.red.inverse)
    process.exit(1)
  }
}

// this is to clean all records DB
const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.log(`Error: ${error.message}`.red.inverse)
    process.exit(1)
  }
}

// conditional statements to run either of the methods depending on the flag sent by npm command executed
if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
