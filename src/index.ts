import pool from "./utils/postgres";

export const fetchDataFromDB = async () => {
  try {

    const client = await pool.connect();
    console.log("Conectado a la base de datos");

    const result = await client.query("SELECT page, pv, uv FROM public.datos_dashboard");
    const data = result.rows;
    console.log("Fetched data:", data);

    client.release();
    return data;
    
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

fetchDataFromDB()
.then(data => {
  console.log("Received data", data);
})
.catch(error => {
  console.error("Error fetching data:", error);
});

// // Ejemplo de consulta a la base de datos
// async function main() {
//   try {
//     const result = await pool.query('SELECT * FROM dashboard_data');
//     console.log('Filas retornadas:', result.rows);
//   } catch (error) {
//     console.error('Error al ejecutar la consulta:', error);
//   } finally {
//     // No necesitas cerrar la conexión manualmente aquí
//     // await pool.end();
//   }
// }

// main();
