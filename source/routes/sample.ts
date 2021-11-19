import express from "express";
import Controller from "../controllers/sample";

const router = express.Router();

router.get("/ping", Controller.sampleHealthCheck);

export default router;
