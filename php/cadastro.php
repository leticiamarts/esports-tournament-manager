<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

require_once 'db_connect.php';

$response = ['success' => false, 'message' => ''];

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents('php://input'), true);
    
    if ($data === null) {
        $response['message'] = "Dados inválidos";
        echo json_encode($response);
        exit;
    }

    $username = trim($data['username'] ?? '');
    $email = trim($data['email'] ?? '');
    $password = trim($data['password'] ?? '');

    if (empty($username) || empty($email) || empty($password)) {
        $response['message'] = "Todos os campos são obrigatórios";
        echo json_encode($response);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response['message'] = "E-mail inválido";
        echo json_encode($response);
        exit;
    }

    if (strlen($password) < 6) {
        $response['message'] = "A senha deve ter no mínimo 6 caracteres";
        echo json_encode($response);
        exit;
    }

    try {
        $check = $conn->prepare("SELECT id FROM users WHERE username = ? OR email = ?");
        $check->execute([$username, $email]);
        
        if ($check->rowCount() > 0) {
            $response['message'] = "Usuário ou e-mail já cadastrado";
            echo json_encode($response);
            exit;
        }

        $sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);
        $stmt->execute([$username, $email, $hashed_password]);
        
        $response = [
            'success' => true,
            'message' => 'Cadastro realizado com sucesso!',
            'user' => [
                'username' => $username,
                'email' => $email
            ]
        ];
    } catch(PDOException $e) {
        $response['message'] = "Erro no servidor: " . $e->getMessage();
    }
} else {
    $response['message'] = "Método não permitido";
}

echo json_encode($response);
?>