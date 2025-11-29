import mongoose, { MongooseError } from 'mongoose';
import 'dotenv/config';

export const connectMongoDB = async () => {
  try {
    const user = process.env.DB_USER;
    const password = process.env.DB_PASSWORD;
    const host = process.env.DB_HOST;
    const dbName = process.env.DB_NAME;

    const mongoUrl = `mongodb+srv://${user}:${password}@${host}/${dbName}?appName=Cluster0`;

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
