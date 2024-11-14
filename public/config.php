<?php
// config. php
header ( 'Content-Type: application/json');
$config = [
    'apiUrl' => getenv('API_URL') ?: 'https://default-api.com',
    'featureFlag' => getenv( 'FEATURE_FLAG') ?: false,
1;
]
echo json_encode($config)