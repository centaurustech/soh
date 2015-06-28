<?php

$index  = 'index.php';
$video  = 'index_video.php';
$temp   = '_index.php';
rename($index, $temp);
rename($video, $index);
?>