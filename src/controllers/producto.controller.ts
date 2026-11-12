import { Request, Response } from "express";
import { productoRepository } from "../repository/ProductoRepository.js";

// todos los productos
export const getProductos = async (req: Request, res: Response) => {
    const productos = await productoRepository.findAll();
    res.json(productos);
};

// un producto por id
export const getProductoById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const producto = await productoRepository.findById(id);
    if (!producto) {
        return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.json(producto);
};

// crear producto
export const createProducto = async (req: Request, res: Response) => {
    const { nombre, precio, stock, categoriaId } = req.body;
    const producto = await productoRepository.create({ nombre, precio, stock, categoriaId });
    res.status(201).json(producto);
};

// actualizar producto
export const updateProducto = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const { nombre, precio, stock, categoriaId } = req.body;
    const producto = await productoRepository.update(id, { nombre, precio, stock, categoriaId });
    if (!producto) {
        return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.json(producto);
};

// eliminar producto
export const deleteProducto = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const eliminado = await productoRepository.delete(id);
    if (!eliminado) {
        return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.json({ message: "Producto eliminado" });
};
