function getXhr() {
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
form=document.getElementById("authentification");
form.addEventListener("submit",authentification);
res= document.getElementById("estValide");
function authentification(e)
{
    e.preventDefault();
    email=document.getElementById("email").value;
    password=document.getElementById("password").value;
    var xhr = getXhr();
    xhr.open("POST", "php/authentification.php", true);
    let data = new FormData();
    data.append("email", email);
    data.append("password", password);
    xhr.send(data);
    xhr.onreadystatechange = function ()
     {
        if ((xhr.readyState === 4) && (xhr.status === 200 ))
        {
            if(xhr.responseText==1)
            {  
                window.location.href = "./acceuildonateur.html";
             }
             if(xhr.responseText==0)
           {
             res.innerHTML="Votre mot de passe ou email est invalide ";
             console.log("ddd");
            }
        }
    }

}