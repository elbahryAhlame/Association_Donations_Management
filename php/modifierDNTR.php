<?php
//modification etudiant

include("Gestiondb.php");
function updateEtudiant($id,$nom, $prenom,$adresse,$tel,$email)
{   
   
    $db = connectionDB();
    $res = $db->exec("UPDATE donator SET Nom = '" . $nom . "', Prenom = '" . $prenom .  "', adresse = '" . $adresse .  "', email = '" . $email .  "', telephone = '" . $tel .  "' WHERE id = '" . $id . "'");
    if ($res)
        return "success";
    else
        return "error";
}
$id = isset($_POST['id']) ?$_POST['id'] : NULL;
$nom = isset($_POST['nom']) ?$_POST['nom'] : NULL;
$prenom = isset($_POST['prenom']) ? $_POST['prenom'] : null;
$adresse = isset($_POST['adresse']) ?$_POST['adresse'] : NULL;
$tel = isset($_POST['tel']) ?$_POST['tel'] : NULL;
$email = isset($_POST['email']) ?$_POST['email'] : NULL;

updateEtudiant($id,$nom, $prenom,$adresse,$tel,$email);
?>