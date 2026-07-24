<?php

header('Content-Type: application/json');

echo json_encode([
    'API_URL' => getenv('REACT_APP_API_URL'),
]);