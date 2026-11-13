import express, { Request, Response, NextFunction } from 'express';
import envioRoutes from './routes/envio.routes.js';
import almacenRoutes from './routes/almacen.routes.js';
import clienteRoutes from './routes/cliente.routes.js';
const app = express();

app.use(express.json());
app.use('/api/envios', envioRoutes);
app.use('/api/almacenes', almacenRoutes);
app.use('/api/clientes', clienteRoutes);

app.get('/api/status', (req: Request, res: Response) => {
  res.json({ status: 'OK', message: 'API funcionando correctamente' });
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({ message: "Error en el servidor", error: err.message });
});

export default app;