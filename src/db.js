import mysql from "mysql2";

// Configuración de la conexión a MySQL
const connection = mysql.createConnection({
  host: "localhost",
  user: "root", // Usuario de MySQL (por defecto "root")
  password: "", // Contraseña (déjala vacía si no has configurado una)
  database: "my_cercas", // Nombre de tu base de datos
});

// Conectar a MySQL
connection.connect((err) => {
  if (err) {
    console.error("❌ Error al conectar a MySQL:", err);
    return;
  }
  console.log("🚀 Conectado a la base de datos MySQL");
});

export default connection;
