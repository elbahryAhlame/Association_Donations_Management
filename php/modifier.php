<?php
//modification etudiant

include("Gestiondb.php");
function updateEtudiant($id,$nom, $prenom, $email, $adresse, $password, $telephone)
{   
   
    $db = connectionDB();
    $res = $db->exec("UPDATE donator SET nom = '" . $nom . "', prenom = '" . $prenom . "', email = '" . $email . "', adresse = '" . $adresse . "', password = '" . $password . "',telephone = '" . $telephone . "' WHERE id = '" . $id . "'");
    if ($res)
        return "success";
    else
        return "error";
}
$nom = isset($_POST['nom']) ?$_POST['nom'] : NULL;
$prenom = isset($_POST['prenom']) ? $_POST['prenom'] : null;
$email = isset($_POST['email']) ? $_POST['email'] : null;
$adresse = isset($_POST['adresse']) ? $_POST['adresse'] : null;
$password = isset($_POST['password']) ? $_POST['password'] : null;
$telephone = isset($_POST['telephone']) ? $_POST['telephone'] : null;
$id=$_SESSION['id'];
updateEtudiant($id,$nom, $prenom, $email, $adresse, $password, $telephone);

?>