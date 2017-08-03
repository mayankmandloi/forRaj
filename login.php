<?php
header("Content-Type: application/json; charset=UTF-8");
$_POST = json_decode(file_get_contents('php://input'), true);
$_POST["username"];

if (($_POST["user"]=="admin")&&$_POST["password"]=="admin") {
 echo json_encode(true);
} else {
  echo json_encode(false);
}
?>
