import mongoose from 'mongoose'
// import colors from 'colors'// works w/o this import as well

const connectDB = async () => {
  try {
    // initiating connection to mongoDB
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // mandatory flags to pass in to avoid warning in console
      useUnifiedTopology: true,
      useNewUrlParser: true,
      // Error: option usecreateindex is not supported
      // useCreateIndex: true, // got above error use commenting the line
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold)
    // used to exit the process and 1 makes it exit with failure
    process.exit(1)
  }
}

export default connectDB
