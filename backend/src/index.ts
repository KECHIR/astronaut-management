import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { authenticateApiKey } from "./middelwares/api-key";
import { connect as connectDb } from "./db/mongo";
import { createApiRoutes } from "./routes";
import bodyParser from "body-parser";

dotenv.config();

async function startServer() {
  await connectDb();
  const port = process.env.PORT;
  const app: Express = express();
  // Utilisation de body-parser pour traiter les données JSON dans le corps de la requête
  app.use(bodyParser.json());
  //------------- add origins
  app.use(cors());
  //------------- add authentication
  app.use("/api", authenticateApiKey);
  //------------- add routes
  app.use("/api", createApiRoutes());
  //------------- start server
  app.listen(port, () => {
    console.log(`Astronaut server is running at port :${port}`);
  });
}

startServer();
