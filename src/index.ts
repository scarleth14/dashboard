const pool = require('./config/database').default;

// Ejemplo de consulta a la base de datos
async function main() {
  try {
    const result = await pool.query('SELECT * FROM dashboard_data');
    console.log('Filas retornadas:', result.rows);
  } catch (error) {
    console.error('Error al ejecutar la consulta:', error);
  } finally {
    // No necesitas cerrar la conexión manualmente aquí
    // await pool.end();
  }
}

main();
