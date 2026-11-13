import { Router } from "express";
import { createPaqueteEnAlmacen } from "../controllers/almacen.controller.js";

const router = Router();

router.post("/:id/paquetes", createPaqueteEnAlmacen);

export default router;