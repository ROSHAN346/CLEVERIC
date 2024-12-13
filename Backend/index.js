import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRoutes from "./route/book.route.js"
import userRoutes from "./route/user.route.js"

import { connect } from 'http2';
import cors from 'cors'


// import "./.env"

const app = express();

//Connect Frontend to Backend
app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URL = process.env.MONGODBURL;

// Connect to MongoDB
const connectDB = async () => {
    try {
      await mongoose.connect(URL);  // No need for deprecated options
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Error:", error.message);
      process.exit(1);  // Exit on failure
    }
  };
  
  connectDB();

// defining routes 
app.use("/book", bookRoutes);
app.use("/user", userRoutes);


app.get('/', (req, res) => {
  res.send('Hello');
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
