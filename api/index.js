import express from "express";
import mongoose from "mongoose";
import userroutes from "./routes/userroutes.js";
import { json } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import listingroutes from "./routes/listingroutes.js"

const app = express()

mongoose.connect("mongodb://localhost:27017/realtor").then(console.log("db conneted"))
app.use(cors())
app.use(cookieParser())
app.use(json())

app.use("/api/users",userroutes)
app.use("/api/listing",listingroutes)

app.listen(8000,()=>{
    console.log("server running at 8000")
})