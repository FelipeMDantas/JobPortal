import "./config/instrument.js";
import cors from "cors";
import "dotenv/config";
import express from "express";
import connectToDB from "./config/db.js";
import * as Sentry from "@sentry/node";
import { clerkWebHooks } from "./controllers/webhooks.js";

const app = express();

await connectToDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("API Working"));
app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});
app.post("/webhooks", clerkWebHooks);

const PORT = process.env.PORT || 5000;

Sentry.setupExpressErrorHandler(app);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
