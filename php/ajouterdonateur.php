<?php
include("Gestiondb.php");
function insertdonnateur($nom, $prenom, $adresse, $tel, $email)
{
    $db = connectionDB();
    $res = $db->exec("INSERT INTO donator (Nom, Prenom, adresse,email,telephone) VALUES ('" . $nom . "', '" . $prenom . "', '" . $adresse . "','" . $email . "','" . $tel . "')");
    if ($res)
        return "success";
    else
        return "error";
}
$nom = isset($_POST['nom']) ?$_POST['nom'] : NULL;
$prenom = isset($_POST['prenom']) ? $_POST['prenom'] : null;
$adresse = isset($_POST['adresse']) ? $_POST['adresse'] : null;
$email = isset($_POST['email']) ? $_POST['email'] : null;
$tel = isset($_POST['tel']) ? $_POST['tel'] : null;
insertdonnateur($nom,$prenom, $adresse, $tel, $email);


?>