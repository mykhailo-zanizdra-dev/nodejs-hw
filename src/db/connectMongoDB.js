import mongoose, { MongooseError } from 'mongoose';
import 'dotenv/config';

export const connectMongoDB = async () => {
  try {
    const mongoUrl = process.env.MONGO_URL;

    await mongoose.connect(mongoUrl);
    await mongoose?.connection?.db?.admin().command({ ping: 1 });

    console.log('✅ MongoDB connection established successfully');
  } catch (error) {
    const errorMessage =
      error instanceof MongooseError
        ? error.message
        : 'MongoDB connection error';
    console.error('❌ Failed to connect to MongoDB:', errorMessage);
    process.exit(1);
  }
};
