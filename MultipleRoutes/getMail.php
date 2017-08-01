<?php
header("Content-Type: application/json; charset=UTF-8");
$_POST = json_decode(file_get_contents('php://input'), true);
print_r($_POST);

$myfile = fopen("testfile.txt", "w") or die("can't open file");
fwrite($myfile, $_POST["name"]);
fwrite($myfile,$_POST["password"]);
fclose($myfile);
?>
