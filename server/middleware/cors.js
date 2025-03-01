import cors from 'cors'

export const corsOptions = {
  origin: 'http://localhost:3000, 1http://localhost:1234, http://localhost:8080, http://localhost:5678', // Origen permitido
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'] // Headers permitidos
}

// Exportar el middleware configurado
export const corsMiddleware = cors(corsOptions)
