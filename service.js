import express from 'express'
import serviceRouter from './route.js';
import cors from "cors"

//express app
const app = express()

//middleware
app.use(express.json());
app.use(cors())

//router
app.use("/api", serviceRouter);





//server
app.listen(5000)