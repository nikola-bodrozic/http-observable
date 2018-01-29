<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH');
header("Access-Control-Allow-Headers: X-Requested-With");
header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];

if ('GET' === $method) {
echo'{
  "files":[
    {
      "id": 1,
      "title": "sunt aut",
      "body": {"foo":"bar"}
    },
    {
      "id": 2,
      "title": "qui est esse",
      "body": {"foo":"ton"}
    }
  ]  
}'; 
}

if ('POST' === $method) {
  $decode = file_get_contents('php://input');
  $arr = json_decode($decode, true);
  error_log("----".print_r($arr['title'], true), 0); 
  foreach (getallheaders() as $name => $value) {
    error_log("---- $name: $value\n", 0);
  }
  echo '{"id":'.random_int(6, 9999).'}';
}

