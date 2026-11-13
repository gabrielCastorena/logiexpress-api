import express, { Request, Response, NextFunction } from 'express';
const app = express();

// Middleware para parsear JSON
app.use(express.json());

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