import connection from "./db.js";

// Definir la consulta SQL para crear la tabla "productos"
const createCercasTable = `
  CREATE TABLE IF NOT EXISTS cercas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10,2) NOT NULL
  )
`;

// Ejecutar la consulta para crear la tabla
connection.query(createCercasTable, (err, results) => {
  if (err) {
    console.error("❌ Error al crear la tabla productos:", err);
  } else {
    console.log("✅ Tabla 'productos' creada o ya existe.");
  }

  // Cerrar conexión después de crear la tabla
  connection.end();
});
