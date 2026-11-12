import express, { Request, Response, NextFunction } from 'express';
import userRoutes from './routes/user.routes.js';
import productoRoutes from './routes/producto.routes.js';
import ventaRoutes from './routes/venta.routes.js';
const app = express();

// Middleware para parsear JSON
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api/productos', productoRoutes);
app.use('/api/ventas', ventaRoutes);
// Ruta de prueba/salud
app.get('/api/status', (req: Request, res: Response) => {
  res.json({ status: 'OK', message: 'API funcionando correctamente' });
});

// Manejador de errores: si la base de datos falla, responde con JSON
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({ message: "Error en el servidor", error: err.message });
});

export default app;
