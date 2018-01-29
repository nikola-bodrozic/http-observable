<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH');
header("Access-Control-Allow-Headers: X-Requested-With");
header('Content-Type: application/json');

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