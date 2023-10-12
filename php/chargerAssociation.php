<?php
include("Gestiondb.php");
function getdons()
{
    $db = connectionDB();
    $res = $db->query("SELECT * FROM association");
    $objet = $res->fetchAll();
    $jsonData = json_encode($objet);
    return $jsonData ; 
}
$res=getdons();
echo $res;
?>