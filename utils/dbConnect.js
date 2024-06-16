import mongoose from 'mongoose';

const dbConnect = async () => {
    try {
      await mongoose.connect("mongodb+srv://HashiruG:mixmatic@cluster0.02jfgy5.mongodb.net/mixmatic");
      console.log('MongoDB connected successfully');
    } catch (error) {
      console.error('MongoDB connection error:', error);
    }
  };

export default dbConnect