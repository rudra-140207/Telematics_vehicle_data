import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from "cors";
import dataRouter from './router/data.js';
import userRouter from './router/user.js';
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/data",dataRouter);
app.use("/user",userRouter);

mongoose.connect(process.env.MONGO_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
}).then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Oh no, it's Working on PORT: ${process.env.PORT}.`);
    });
}).catch(err => {
    console.error('Connection error', err.message);
});
