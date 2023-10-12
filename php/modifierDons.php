<?php
include_once('Gestiondb.php');
function modifierDon($id,$association,$donnateur,$paiement,$etat,$montant)
{
    $db = connectionDB();
    $db->exec("UPDATE dons SET id = '" . $id . "', nomassociation = '" . $association . "', nomdonator = '" . $donnateur .  "' , montant = '" . $montant .  "', paiement = '" . $paiement .  "', etat = '" . $etat .  "'WHERE id = '" . $id . "'");

}



$id = (isset($_POST["id"])) ? $_POST["id"] : NULL;
$association = (isset($_POST["association"])) ? $_POST["association"] : NULL;
$donnateur = (isset($_POST["donnateur"])) ? $_POST["donnateur"] : NULL;
$paiement = (isset($_POST["paiement"])) ? $_POST["paiement"] : NULL;
$etat = (isset($_POST["etat"])) ? $_POST["etat"] : NULL;
$montant = (isset($_POST["montant"])) ? $_POST["montant"] : NULL;

modifierDon($id,$association,$donnateur,$paiement,$etat,$montant);
?>

