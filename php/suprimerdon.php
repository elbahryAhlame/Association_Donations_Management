<?php
include("Gestiondb.php");

function suprimeDon($id)
{
    $db = connectionDB();
    $res = $db->exec("DELETE FROM dons WHERE id = '" . $id . "'");

}
$id = (isset($_POST["id"])) ? $_POST["id"] : NULL;


suprimeDon($id);
?>