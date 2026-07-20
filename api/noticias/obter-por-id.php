<?php
if(empty($pdo)) {
    include_once('load-env.php');
    include_once('database/connectdb.php');
}
try {
    $where = "";
    
    // Lê o corpo da requisição JSON
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);

    // Exemplo de uso:
    $id = $data['id'] ?? null;
    if (!empty($id)) {
        $where = "WHERE id = " . intval($id);
    }
    $stmt = $pdo->query("SELECT * FROM noticia $where ORDER BY data_publicacao DESC LIMIT 1");
    $noticia = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $noticiaInfo = $noticia[0];
    echo json_encode((object) array('conteudo' => '<div>
            <div id="imagem-background" alt="imagem-background" class="w-100 float-start me-2 my-2" ></div>
            <div data-id=' . $noticiaInfo['id'] . ' style="" class="noticia-conteudo">' .
                (!empty($noticiaInfo['imagem']) ?
                    '<script>$("#imagem-background").css("background-image", "url(' . htmlspecialchars($noticiaInfo['imagem']) . ')");</script>'
                : '') .
                '<div class="me-2 mt-4 px-3"><div class="text-center">-- Continua depois do anúncio --</div>' .
                    '<div id="frame" style="width: 100%;margin: auto;position: relative; z-index: 1;"><iframe data-aa=\'2417696\' src=\'\/\/acceptable.a-ads.com/2417696/?size=Adaptive\' style=\'border:0; padding:0; width:70%; height:auto; overflow:hidden;display: block;margin: auto\'></iframe></div>' .
                    '<p class="text-dark">' . $noticiaInfo['conteudo'] . '</p>
                </div>' .
                (!empty($noticiaInfo['data_edicao']) ?
                    '<small class="text-muted">Editado em ' . date("d/m/Y H:i", strtotime($noticiaInfo['data_edicao'])) . '</small>'
                : '') .
            '</div>
        </div>', 
        'imagem' => $noticiaInfo['imagem'], 
        'titulo' => '<div class="p-3" style="background-color: rgba(43,43,43,.6)">' .
            '<h1 class="mb-1 text-light" style="cursor:pointer;" onclick="toggleNoticiaContent(' .
            $noticiaInfo['id'] . 
            ')">
                <strong>' .
                $noticiaInfo['titulo'] .
            '</strong></h1>
            <small class="text-light">
                Publicado em ' . date("d/m/Y H:i", strtotime($noticiaInfo['data_publicacao'])) .
                ' por ' . htmlspecialchars($noticiaInfo['autor']) .
                (!empty($noticiaInfo['categoria']) ?
                    '— <em>' . htmlspecialchars($noticiaInfo['categoria']) . '</em>'
                : '') .
            '</small>
        </div>',
        'resumo' => (!empty($noticiaInfo['resumo']) ?
                    '<div class="mt-2 text-light px-3 py-3 col-md-6" style="background-color: darkslategray"><h2><strong>' . htmlspecialchars($noticiaInfo['resumo']) . '</strong></h2></div>'
                : '')));
} catch (Exception $e) {
    die("Erro ao carregar notícias: " . $e->getMessage());
}
?>