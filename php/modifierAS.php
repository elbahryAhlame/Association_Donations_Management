<?php
//modification etudiant

include("Gestiondb.php");
function updateEtudiant($id,$nom, $description)
{   
   
    $db = connectionDB();
    $res = $db->exec("UPDATE association SET nom = '" . $nom . "', description = '" . $description .  "' WHERE id = '" . $id . "'");
    if ($res)
        return "success";
    else
        return "error";
}
$id = isset($_POST['id']) ?$_POST['id'] : NULL;
$nom = isset($_POST['nom']) ?$_POST['nom'] : NULL;
$description = isset($_POST['description']) ? $_POST['description'] : null;
updateEtudiant($id,$nom, $description);
?>