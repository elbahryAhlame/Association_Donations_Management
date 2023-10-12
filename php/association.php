<?php
include_once('Gestiondb.php');

function getAssociation()
{
    $db = connectionDB();
    $res = $db->query("SELECT * FROM association ");
    $objet = $res->fetchAll();
    $jsonData = json_encode($objet);
    return $jsonData ; 
}
$res=getAssociation();
echo $res ;
?>