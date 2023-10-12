<?php
include_once('Gestiondb.php');

$password = (isset($_POST["password"])) ? $_POST["password"] : NULL;
$email = (isset($_POST["email"])) ? $_POST["email"] : NULL;
$res=setdonator($email,$password);
echo $res;

?>