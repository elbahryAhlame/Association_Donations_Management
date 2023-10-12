<?php

include_once('Gestiondb.php');
function getdons()
{
    $db = connectionDB();
    $res = $db->query("SELECT * FROM dons  ");
    $objet = $res->fetchAll();
    $jsonData = json_encode($objet);
    return $jsonData ; 
}
//$id= $_GLOBALS['id'];
$res = getdons();
echo $res ;
?>