<?php
include_once('Gestiondb.php');
$nom = (isset($_POST["nom"])) ? $_POST["nom"] : NULL;
$prenom = (isset($_POST["prenom"])) ? $_POST["prenom"] : NULL;
$email = (isset($_POST["email"])) ? $_POST["email"] : NULL;
$tel = (isset($_POST["tel"])) ? $_POST["tel"] : NULL;
$adresse = (isset($_POST["adresse"])) ? $_POST["adresse"] : NULL;
$password = (isset($_POST["password"])) ? $_POST["password"] : NULL;

$res = insertEtudiant($nom, $prenom, $email,$adresse,$tel, $password);
    if ($res == "success")
        echo "success";
    else
        echo "error";

?>