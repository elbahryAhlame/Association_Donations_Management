<?php
include("Gestiondb.php");
function getdonateur()
{
    $db = connectionDB();
    $res = $db->query("SELECT * FROM donator  ");
    $objet = $res->fetchAll();
    $jsonData = json_encode($objet);
    return $jsonData ; 
}
$res=getdonateur();
echo $res;
?>