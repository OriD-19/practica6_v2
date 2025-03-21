import mongoose, { Schema } from 'mongoose';

interface IUser {
    name: string,
    email: string,
    password: string,
    username: string,
};