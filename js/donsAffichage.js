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

  var parentElement = document.getElementById("table")
  
//creation des elements

//recuperation des donnes 
  var xhr = getXhr();
    xhr.open("POST", "php/donAffichage.php", true);
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) 
      {
        console.log(responseText);
        var responseText = xhr.responseText;
    
        // Vérifier si la réponse est du JSON valide
        try {
          var responseJson = JSON.parse(responseText);
          var tab = responseJson;
         
          for(var i =0; i<tab.length;i++)
          {
            tr= document.createElement("tr");
            th1= document.createElement("td");
            th2= document.createElement("td");
            th3= document.createElement("td");
            th4= document.createElement("td");
           
            th1.innerHTML=tab[i].montant;
            th2.innerHTML=tab[i].etat;
            th3.innerHTML=tab[i].paiement;
            th4.innerHTML=tab[i].nomassociation;
           
           
            tr.appendChild(th1)
            tr.appendChild(th2)
            tr.appendChild(th3)
            tr.appendChild(th4)
           
            parentElement.appendChild(tr)
            
          }
        }
        catch
        {

        }
    }   
    }
  });

  