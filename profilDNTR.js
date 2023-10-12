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



document.addEventListener("DOMContentLoaded", function()
 {
  nom=document.getElementById("nom");
prenom=document.getElementById("prenom");
email=document.getElementById("email");
tel=document.getElementById("tel");
password=document.getElementById("password");
  console.log("fffff")
    var xhr = getXhr();
    xhr.open("POST", "php/profil.php", true);
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(responseText);
        var responseText = xhr.responseText;
    
        // Vérifier si la réponse est du JSON valide
        try {
          var responseJson = JSON.parse(responseText);
          var tab = responseJson;
          for(var i =0; i<tab.length;i++)
          {
            nom.value =tab[i].Nom;
            prenom.value = tab[i].Prenom;
            email.value = tab[i].email;
            tel.value = tab[i].telephone;
            password.value =tab[i].password;
            adresse.value = tab[i].adresse;
          }
        } catch (error) 
        {
          console.error("Erreur lors du parsing de la réponse JSON ", error);
       
          
        }
      }
    };
    
});


