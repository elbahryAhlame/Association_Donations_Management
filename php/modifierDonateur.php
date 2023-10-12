<?php
include_once('Gestiondb.php');
function modifierDon($id,$nom,$prenom,$email,$adresse,$tel)
{
    $db = connectionDB();
    $db->exec("UPDATE donator SET id = '" . $id . "', nom = '" . $nom . "', prenom = '" . $prenom .  "' , adresse = '" . $adresse .  "', email = '" . $email .  "', telephone = '" . $tel .  "'WHERE id = '" . $id . "'");

}



$id = (isset($_POST["id"])) ? $_POST["id"] : NULL;
$association = (isset($_POST["nom"])) ? $_POST["nom"] : NULL;
$donnateur = (isset($_POST["prenom"])) ? $_POST["prenom"] : NULL;
$paiement = (isset($_POST["email"])) ? $_POST["email"] : NULL;
$etat = (isset($_POST["adresse"])) ? $_POST["adresse"] : NULL;
$montant = (isset($_POST["telephone"])) ? $_POST["telephone"] : NULL;

modifierDon($id,$nom,$prenom,$email,$adresse,$tel);
?>
