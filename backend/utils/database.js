import mongoose from 'mongoose';
import env from 'dotenv';
env.config();

const connectDB = async () => {
  await mongoose
    .connect(
      process.env.MONGODB_URI,
      /* {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      }, */
    )
    .then(
      console.log("connected to database")
    );
};

export {connectDB};