<?php
header('Content-Type: application/json'); // <-- importante!

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Sanitiza e coleta os dados
    $name = htmlspecialchars(trim($_POST['name'] ?? ''));
    $email = htmlspecialchars(trim($_POST['email'] ?? ''));
    $company = htmlspecialchars(trim($_POST['company'] ?? ''));
    $service = htmlspecialchars(trim($_POST['service'] ?? ''));
    $message = htmlspecialchars(trim($_POST['message'] ?? ''));

    // Validação simples
    if (empty($name) || empty($email) || empty($service)) {
        echo json_encode([
            "success" => false,
            "message" => "Campos obrigatórios não preenchidos."
        ]);
        exit;
    }

    // Configurações do e-mail
    $to = "seuemail@dominio.com"; // <-- troque pelo seu
    $subject = "Novo agendamento de demo - Humanas Tech";
    $body = "
        <h2>Nova solicitação de demonstração</h2>
        <p><strong>Nome:</strong> {$name}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Empresa:</strong> {$company}</p>
        <p><strong>Serviço de interesse:</strong> {$service}</p>
        <p><strong>Mensagem:</strong><br>{$message}</p>
    ";

    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8\r\n";
    $headers .= "From: {$name} <{$email}>\r\n";

    // Tenta enviar
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode([
            "success" => true
        ]);
    } else {
        echo json_encode([
            "success" => false,
            "message" => "Falha ao enviar o e-mail."
        ]);
    }
} else {
    echo json_encode([
        "success" => false,
        "message" => "Método inválido."
    ]);
}
?>
