import { Request, Response } from "express";
import { ventaRepository } from "../repository/VentaRepository.js";

// todas las ventas
export const getVentas = async (req: Request, res: Response) => {
    const ventas = await ventaRepository.findAll();
    res.json(ventas);
};

// una venta por id
export const getVentaById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const venta = await ventaRepository.findById(id);
    if (!venta) {
        return res.status(404).json({ message: "Venta no encontrada" });
    }
    res.json(venta);
};

// crear venta (los detalles son opcionales)
export const createVenta = async (req: Request, res: Response) => {
    const { cliente, fecha, total, detalles } = req.body;
    const venta = await ventaRepository.create({ cliente, fecha, total, detalles });
    res.status(201).json(venta);
};

// actualizar venta (solo cliente, fecha y total)
export const updateVenta = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const { cliente, fecha, total } = req.body;
    const venta = await ventaRepository.update(id, { cliente, fecha, total });
    if (!venta) {
        return res.status(404).json({ message: "Venta no encontrada" });
    }
    res.json(venta);
};

// eliminar venta
export const deleteVenta = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const eliminada = await ventaRepository.delete(id);
    if (!eliminada) {
        return res.status(404).json({ message: "Venta no encontrada" });
    }
    res.json({ message: "Venta eliminada" });
};
