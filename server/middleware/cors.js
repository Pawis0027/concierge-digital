import cors from 'cors';

export const corsOptions = {
  origin: '3000, 1234, 8080, 5678', 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], 
  allowedHeaders: ['Content-Type', 'Authorization'], // Headers permitidos
};

// Exportar el middleware configurado
export const corsMiddleware = cors(corsOptions);
