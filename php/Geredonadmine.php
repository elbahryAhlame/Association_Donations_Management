<?php
include("Gestiondb.php");
function insertdonnateur($association, $donnateur, $montant, $paiement, $etat)
{
    $db = connectionDB();
    $res = $db->exec("INSERT INTO dons (nomassociation, nomdonator, montant,paiement,etat) VALUES ('" . $association . "', '" . $donnateur . "', '" . $montant . "','" . $paiement . "','" . $etat . "')");
    if ($res)
        return "success";
    else
        return "error";
}
$association = isset($_POST['association']) ?$_POST['association'] : NULL;
$donnateur = isset($_POST['donnateur']) ? $_POST['donnateur'] : null;
$montant = isset($_POST['montant']) ? $_POST['montant'] : null;
$paiement = isset($_POST['paiement']) ? $_POST['paiement'] : null;
$etat = isset($_POST['etat']) ? $_POST['etat'] : null;
insertdonnateur($association,$donnateur, $montant, $paiement, $etat);


?>