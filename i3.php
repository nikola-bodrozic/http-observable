<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH');
header("Access-Control-Allow-Headers: X-Requested-With");
header('Content-Type: application/json');
//var_dump($_GET);die;
if ($_GET["id"] == 1){
  echo '{ "files": [{ "id": 1, "title": "sunt aut", "body": { "foo": "bar" } }] }';
} 
if ($_GET["id"] == 2){
  echo '{ "files": [{ "id":2 , "title": "lorem ipsum", "body": { "foo": "hul" } }] }';
}