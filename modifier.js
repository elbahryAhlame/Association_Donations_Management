function getXhr() 
{
    let xhr = null;
    try {
      xhr = new XMLHttpRequest();
      console.log("Your browser support AJAX!");
    } catch (e) {
      try {
        xhr = new ActiveXObject("Msxml2.XMLHTTP");
      } catch (e) {
        try {
          xhr = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {
          console.log("Your browser does not support AJAX!");
        }
      }
    }
    return xhr;
  }

  function refrech() 
  {
   console.log("qsdtyui")
    nom=document.getElementById("nom").value;
    prenom=document.getElementById("prenom").value;
    adresse=document.getElementById("adresse").value;
    tel=document.getElementById("tel").value;
    email=document.getElementById("email").value;
    password=document.getElementById("password").value;
    console.log(tel);

    console.log(email);
    console.log(password);
    console.log(adresse);
    var xhr = getXhr();
    xhr.open("POST", "php/modifier.php", true);
    let data = new FormData();
    data.append("nom", nom);
    data.append("prenom", prenom);
    data.append("email", email);
    data.append("adresse",adresse);
    data.append("telephone", tel);
    data.append("password", password);
    data.append("action","submit");
    console.log(data);
    xhr.send(data);
}








