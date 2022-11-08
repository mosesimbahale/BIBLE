require('dotenv').config();

const mongoose = require('mongoose');


const { success, error } = require("consola");

const connectDB = async () => {
  try {
  
    const conn = await mongoose.connect(process.env.MONGO_URI)
    
    success({ message: `MongoDB Connected... ${conn.connection.host}`.green.underline, badge: true });

  
  } catch (err) {

    error({ message: `Unable to connect to database: ${err}`, badge: true });
    process.exit(1)

  }
}

module.exports = connectDB;