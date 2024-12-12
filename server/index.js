import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import movieRoute from "./routes/movieRoute.js";
import dotenv from "dotenv";
import path from 'path';
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/movies", movieRoute);

// use the client app
app.use(express.static(path.join(__dirname, '/client/dist')))

// Render client for any path
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/client/dist/index.html')))





mongoose
  .connect(process.env.mongoDBURL)
  .then(() => {
    console.log("We are connected to database");
    app.listen(5555,  () => {
      console.log("server running on port: 5555");
    });
  })
  .catch((err) => {
    console.log(err);
  });
