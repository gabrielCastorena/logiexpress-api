import { Router } from "express";
import { createEnvio, updateCostoEnvio, createEventoRastreo } from "../controllers/envio.controller.js";

const router = Router();

router.post("/", createEnvio);
router.put("/:id/costo", updateCostoEnvio);
router.post("/:id/rastreo", createEventoRastreo);

export default router;