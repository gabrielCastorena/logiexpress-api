import { Request, Response } from "express";
import { envioRepository } from "../repository/EnvioRepository.js";

//POST /api/envios 
export const createEnvio = async (req: Request, res: Response) => {
    const { id_dir_origen, id_dir_destino, costo_total, paquetes } = req.body;
    const envio = await envioRepository.crearConPaquetes(id_dir_origen, id_dir_destino, costo_total, paquetes);
    res.status(201).json(envio);
};


//PUT /api/envios/:id/costo
export const updateCostoEnvio = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const { costo_total } = req.body;
    const envio = await envioRepository.actualizarCosto(id, costo_total);
    if (!envio) {
        return res.status(404).json({ message: "Envio no encontrado" });
    }
    res.json(envio);
};