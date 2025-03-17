<?php
$host = "localhost";  // Servidor
$user = "root";       // Usuario por defecto en XAMPP
$pass = "";           // Contraseña vacía por defecto
$db = "cercas";  // Nombre de la base de datos

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
} else {
    echo "Conexión exitosa";
}
?>
