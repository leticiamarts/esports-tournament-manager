<?php
require_once 'db_connect.php';

$sql = "CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";

try {
    $conn->exec($sql);
    echo "Table created successfully";
} catch(PDOException $e) {
    echo "Error creating table: " . $e->getMessage();
}

$conn = null;
?>