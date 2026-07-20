<?php
include_once(__DIR__."/../load-env.php");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: " . getenv('REACT_APP_URL'));
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

echo json_encode(
    array(
        0 => (object) [
            'id' => 1,
            'url' => '/jogos/linhaamarela/',
            'titulo' => 'Linha Amarela',
            'descricao' => 'Divirta-se eliminando os invasores, antes que eles desçam e eliminem a terra!<br>',
            'resumo' => 'Um território, uma linha, um herói: você.',
            'imagem' => '/img/invasao-alien.png'
        ],
        1 => (object) [
            'id' => 2,
            'url' => '/jogos/combo-memo/',
            'titulo' => 'Combo-Memo',
            'descricao' => 'Um divertido jogo da memória com combinações!<br>',
            'resumo' => '',
            'imagem' => '/img/combo-memo.png'
        ],
        2 => (object) [
            'id' => 3,
            'url' => '/jogos/caca-palavras/',
            'titulo' => 'Caça-Palavras',
            'descricao' => 'Um clássico caça-palavras para testar sua atenção e vocabulário.',
            'resumo' => '',
            'imagem' => '/jogos/img/a.jpg'
        ],
        3 => (object) [
            'id' => 4,
            'url' => '/jogos/palavras-cruzadas/',
            'titulo' => 'Palavras Cruzadas',
            'descricao' => 'Desafie seu conhecimento com este quebra-cabeça de palavras.',
            'resumo' => '',
            'imagem' => '/jogos/img/flat-crosswords.png'
        ],
        4 => (object) [
            'id' => 5,
            'url' => '/jogos/quebra-palavras/',
            'titulo' => 'Caixa de Letras',
            'descricao' => 'Desafie seu conhecimento com este quebra-cabeça com letrinhas.',
            'resumo' => '',
            'imagem' => '/jogos/img/caixa-de-letras.png'
        ],
    )
);