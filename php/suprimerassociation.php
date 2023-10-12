<?php
include("Gestiondb.php");

function suprimeDonateur($id)
{
    $db = connectionDB();
    $res = $db->exec("DELETE FROM association WHERE id = '" . $id . "'");

}
$id = (isset($_POST["id"])) ? $_POST["id"] : NULL;


suprimeDonateur($id);
?>