console.clear();
import express from "express";
import cors from "cors";
import { dbConfig } from "./utils/dbConfig";
import { mainApp } from "./mainApp";
import dotenv from "dotenv";
dotenv.config();

const port = parseInt(process.env.PORT!);
const app = express();

app.use(express.json());
app.use(cors({ origin: process.env.APP_URL_LOCAL }));

mainApp(app);

const server = app.listen(port, () => {
  console.log("App Listening to Port On: ", port);
  dbConfig();
});

process.on("uncaughtException", (error: Error) => {
  console.error("uncaughtException", error);
  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("unhandledRejection", reason);
  server.close(() => {
    process.exit(1);
  });
});
