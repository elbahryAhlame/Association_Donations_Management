<?php
session_start();
function connectionDB()
{
    $db = new PDO('mysql:host=localhost;dbname=donassociation', 'root', 'root');
    return $db;
}

//insertion etudiant 
function insertEtudiant($nom, $prenom, $email, $adresse, $tel, $password)
{
    $db = connectionDB();
    $res = $db->exec("INSERT INTO donator (nom, prenom, adresse,email,telephone,password) VALUES ('" . $nom . "', '" . $prenom . "', '" . $adresse . "','" . $email . "','" . $tel . "', '" . $password . "')");
    if ($res)
        return "success";
    else
        return "error";
}
//afficher un etudiant
function getdonator($id)
{
    $db = connectionDB();

    $res = $db->query("SELECT * FROM donator WHERE id = '" . $id . "'");
    $objet = $res->fetchAll();
    $jsonData = json_encode($objet);
    return $jsonData ;
}
//auth
function setdonator($email,$password)
{
    $id=-1;
    //$_GLOBALS['id'] ;
    $db = connectionDB();
$query = $db->prepare("SELECT * FROM donator WHERE email = :email AND password = :password");
$query->bindParam(':email', $email);
$query->bindParam(':password', $password);
$query->execute();
$row = $query->fetch();
if ($row )
{ 
    
   // $_GLOBALS['id']=$row['id'];
$_SESSION['id']=$row['id'];
$_SESSION['Nom']=$row['Nom'];

  return 1;
}   
else
{
    return 0;
}
}

?>



