import cors from "cors";
import "dotenv/config";
import express from "express";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("API Working"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
