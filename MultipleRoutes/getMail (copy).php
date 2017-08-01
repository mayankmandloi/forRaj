<?php
$myfile = fopen("testfile.txt", "w") or die("can't open file");
fwrite($myfile, "Hello");
fclose($myfile);
?>
