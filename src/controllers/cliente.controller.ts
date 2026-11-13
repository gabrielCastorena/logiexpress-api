import { Request, Response } from "express";
import { envioRepository } from "../repository/EnvioRepository.js";

// GET /api/clientes/:id/envios -> historial de envios que ha mandado el cliente
export const getEnviosDeCliente = async (req: Request, res: Response) => {
    const idCliente = Number(req.params.id);
    const envios = await envioRepository.findByCliente(idCliente);
    res.json(envios);
};