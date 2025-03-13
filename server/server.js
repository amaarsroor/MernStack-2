import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "../server//configs/mongodb.js";

// APP Config 

const PORT = process.env.PORT || 4000

const app = express();

await connectDB();

// Initialize Middlewares

app.use(express.json());
app.use(cors());

// API Routes

app.get('/',(req,res)=> res.send("API Workings"))

app.listen(PORT,()=>console.log("Server Running In Port"+ PORT))