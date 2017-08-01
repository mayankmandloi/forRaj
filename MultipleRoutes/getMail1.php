<?php
header("Content-Type: application/json; charset=UTF-8");
$_POST = json_decode(file_get_contents('php://input'), true);
$myfile = fopen("testfile.txt", "w") or die("can't open file");
fwrite($myfile, $_POST);
//fwrite($myfile,$_POST["password"]);

fclose($myfile);
?>
