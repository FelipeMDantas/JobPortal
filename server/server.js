import "./config/instrument.js";
import cors from "cors";
import "dotenv/config";
import express from "express";
import connectToDB from "./config/db";

const app = express();

await connectToDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("API Working"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
