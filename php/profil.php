<?php
include_once('Gestiondb.php');
//$id= $_COOKIE['user'];
$id=$_SESSION['id'];
$res = getdonator($id);
header('Content-Type: application/json');
echo $res;
?>