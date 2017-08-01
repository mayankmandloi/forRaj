<?php

$myfile = fopen("testfile.txt", "w") or die("can't open file");
fwrite($myfile, "name:mayank");
fwrite($myfile,"password:mayank");

fclose($myfile);
?>
