import { Router } from "express";
import { createEnvio, updateCostoEnvio } from "../controllers/envio.controller.js";

const router = Router();

router.post("/", createEnvio);
router.put("/:id/costo", updateCostoEnvio);

export default router;