import express from 'express'  
import cors from "cors"
import bodyParser from "body-parser";

import linkRouter from "./Routers/linkRouter.js";
import userRouter from './Routers/userRouter.js';
const port = 3000;
import connectDB from './database.js'
connectDB();
const app = express()
app.use(cors());

app.use(bodyParser.json());

app.use('/link', linkRouter);
app.use('/user', userRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });