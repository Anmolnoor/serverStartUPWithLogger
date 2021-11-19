import { Request, Response, NextFunction } from "express";
import logging from "../config/logging";

const NAMESPACE = "Sample Controller";

const sampleHealthCheck = (req: Request, res: Response, next: NextFunction): Response => {
	logging.info(NAMESPACE, "sample Health Check route called");
	return res.status(200).json({
		message: "pong"
	});
	// next();
};

export default { sampleHealthCheck };
