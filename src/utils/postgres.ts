import { Pool } from 'pg';

// Configuración de la conexión a la base de datos PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '123456',
  port: 5432, // Puerto predeterminado de PostgreSQL
});

// Manejar evento 'connect' para confirmar la conexión exitosa
pool.on('connect', () => {
  console.log('Conexión exitosa a la base de datos PostgreSQL');
});

// Manejar evento 'error' para manejar errores de conexión
pool.on('error', (err) => {
  console.error('Error de conexión a la base de datos PostgreSQL:', err);
});

export default pool;