import express from "express";
const serviceRouter = express.Router();

import { startService, stopService } from "./controller.js";

serviceRouter.route("/").get(startService);//call the start controller service 
serviceRouter.route("/stop").get(stopService) 


export default serviceRouter;
