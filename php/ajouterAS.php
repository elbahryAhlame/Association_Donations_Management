<?php
include("Gestiondb.php");
function insertdonnateur($nom, $description)
{
    $db = connectionDB();
    $res = $db->exec("INSERT INTO association (nom,description) VALUES ('" . $nom . "', '" . $description . "')");
    if ($res)
        return "success";
    else
        return "error";
}
$nom = isset($_POST['nom']) ?$_POST['nom'] : NULL;
$description = isset($_POST['description']) ? $_POST['description'] : null;

insertdonnateur($nom,$description);


?>