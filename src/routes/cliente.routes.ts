import { Router } from "express";
import { getEnviosDeCliente } from "../controllers/cliente.controller.js";

const router = Router();

router.get("/:id/envios", getEnviosDeCliente);

export default router;