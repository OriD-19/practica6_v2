import mongoose from 'mongoose';
import 'dotenv/config';

export const connectDB = async () => {
    try {
        const url = process.env.DB_CONNECTION_STRING;
        const connection = await mongoose.connect(url);
        console.log('Mongo conectado');
    } catch (error) {
        console.log(error.message);
    }
}