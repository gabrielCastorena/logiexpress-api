import { Request, Response } from "express";
import { envioRepository } from "../repository/EnvioRepository.js";

//POST /api/envios 
export const createEnvio = async (req: Request, res: Response) => {
    const { id_dir_origen, id_dir_destino, costo_total, paquetes } = req.body;
    const envio = await envioRepository.crearConPaquetes(id_dir_origen, id_dir_destino, costo_total, paquetes);
    res.status(201).json(envio);
};