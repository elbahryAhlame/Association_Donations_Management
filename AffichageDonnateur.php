<?php
include_once('Gestiondb.php');

function getAssociation()
{
    $db = connectionDB();
    $res = $db->query("SELECT * FROM dons");
    $objet = $res->fetchAll();
    $jsonData = json_encode($objet);
    return $jsonData ; 
}
$res=getAssociation();
echo $res ;
?>