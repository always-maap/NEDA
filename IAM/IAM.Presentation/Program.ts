// loads environment variables from a .env file into process.env. built-in since Node.js version 20.6.0
import "dotenv/config";
import "reflect-metadata";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { MapRoutes } from "./Controllers";
import { UseWorkers } from "IAM.Worker";
import { UseAuthentication } from "@neda/framework";

(async () => {
  const app = express();
  const port = process.env.PORT || 8080;

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
  app.use(bodyParser.json());

  // cors configuration
  app.use(cors());

  app.use(UseAuthentication);

  // map routes
  const mappedRoutes = await MapRoutes();
  app.use(mappedRoutes);

  UseWorkers();

  // starting server
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
})();
