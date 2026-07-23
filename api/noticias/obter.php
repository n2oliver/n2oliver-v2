<?php
include_once(__DIR__.'/../database/connectdb.php');
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: " . getenv('REACT_APP_URL'));
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}


try {
    $input = json_decode(file_get_contents('php://input'), true);

    $page = !empty($input['page']) ? (int)$input['page'] : 1;
    $limit = !empty($input['limit']) ? (int)$input['limit'] : 5;

    $offset = ($page - 1) * $limit;
    $stmt = $pdo->query("SELECT COUNT(id) AS total FROM noticia");
    $total = $stmt->fetchAll(PDO::FETCH_ASSOC);
    if($offset > $total[0]['total']+5) {
        $offset = $offset - 1;
        $page = $page - 1;
    }
    $stmt = $pdo->query("SELECT * FROM noticia ORDER BY data_publicacao DESC LIMIT $offset, $limit");
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    $noticias = array('results' => $results, 'page' => $page, 'pages' => $total[0]['total'] / 10);
    echo json_encode($noticias);
} catch (Exception $e) {
    die("Erro ao carregar notícias: " . $e->getMessage());
}
?>