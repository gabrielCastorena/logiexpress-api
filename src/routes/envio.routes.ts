import { Router } from "express";
import { createEnvio } from "../controllers/envio.controller.js";

const router = Router();

router.post("/", createEnvio);

export default router;