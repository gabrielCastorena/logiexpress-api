import { Request, Response } from "express";
import { paqueteRepository } from "../repository/PaqueteRepository.js";

// POST /api/almacenes/:id/paquetes -> crea un paquete dentro del almacen (el trigger valida la capacidad)
export const createPaqueteEnAlmacen = async (req: Request, res: Response) => {
    const idAlmacen = Number(req.params.id);
    try {
        const paquete = await paqueteRepository.crearEnAlmacen(idAlmacen, req.body);
        res.status(201).json(paquete);
    } catch (error: any) {
        if (error.sqlState === "45000") {
            return res.status(400).json({ message: error.sqlMessage });
        }
        throw error;
    }
};