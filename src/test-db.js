import connection from "./db.js";

connection.query("SHOW TABLES", (err, results) => {
  if (err) {
    console.error("Error al ejecutar la consulta:", err);
  } else {
    console.log("Tablas en la base de datos:", results);
  }
  connection.end(); // Cierra la conexión después de la prueba
});
