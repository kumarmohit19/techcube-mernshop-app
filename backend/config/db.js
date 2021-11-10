import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    // initiating connection to mongoDB
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // mandator falgs to pass in to avoid warning in console
      useUnifiedTopology: true,
      useNewUrlParser: true,
      // Error: option usecreateindex is not supported
      // useCreateIndex: true, // got above error use commenting the line
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    // used to exit the process and 1 makes it exit with failure
    process.exit(1)
  }
}

export default connectDB
