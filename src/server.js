import express from "express";
import connection from "./db.js";

const app = express();
app.use(express.json());

app.get("/productos", (req, res) => {
  connection.query("SELECT * FROM productos", (err, results) => {
    if (err) {
      res.status(500).json({ error: "Error en la consulta" });
    } else {
      res.json(results);
    }
  });
});

app.listen(3000, () => {
  console.log("🚀 Servidor corriendo en http://localhost:3000");
});
