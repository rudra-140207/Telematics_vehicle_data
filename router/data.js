import express from "express";
import { fetchData } from "../controllers/data.js";

const dataRouter = express.Router();

dataRouter.get("/",fetchData);

export default dataRouter;