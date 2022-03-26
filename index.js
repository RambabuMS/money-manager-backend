import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";
import { transactionRoute } from "./routes/transactions.js";
import { authRoute } from "./routes/auth.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(cors()); // cors - third party middleware

app.use(express.json()); // Inbuild middleware

const MONGO_URL = process.env.MONGO_URL;

async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongo is connected ✌️😊");
  return client;
}
export const client = await createConnection();

app.get("/", function (req, res) {
  res.send("Hello hack");
});

app.use("/auth", authRoute);
app.use("/transaction", transactionRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is Started");
});
