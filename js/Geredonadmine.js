var idUser;
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

  function ajouter(e) 
  {
   
    e.preventDefault();
    association=document.getElementById("association").value;
    donnateur=document.getElementById("donnateur").value;
    montant=document.getElementById("montant").value;
    paiement=document.getElementById("paiement").value;
    etat=document.getElementById("etat").value;
    console.log(donnateur);
    var xhr = getXhr();
    xhr.open("POST", "php/Geredonadmine.php", true);
    let data = new FormData();
    data.append("association", association);
    data.append("donnateur", donnateur);
    data.append("montant", montant);
    data.append("paiement",paiement);
    data.append("etat", etat);
   data.append("action","submit");
    xhr.send(data);
}
document.getElementById('formajouter').addEventListener('submit', ajouter);


//charger les données 
document.addEventListener("DOMContentLoaded", function()
 {

  var parentElement = document.getElementById("table")
  
//creation des elements

//recuperation des donnes 
  var xhr = getXhr();
    xhr.open("POST", "php/charger.php", true);
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
            buttun= document.createElement("button");
            buttun.classList.add("suprimer")
            buttun.style.backgroundColor = "red";
            buttun.innerHTML="supprimer"
            ///////
            buttun2= document.createElement("button");
            buttun2.classList.add("modifier")
            buttun2.style.backgroundColor = "yellow";
            buttun2.innerHTML="<a href='#editEmployeeModal' class='modifier' class='edit'  data-toggle='modal'>modifier</a>"
            tr= document.createElement("tr");
            th1= document.createElement("td");
            th2= document.createElement("td");
            th3= document.createElement("td");
            th4= document.createElement("td");
            th5= document.createElement("td");
            th6= document.createElement("td");
            th7= document.createElement("td");
            th1.innerHTML=tab[i].id;
            th2.innerHTML=tab[i].nomassociation;
            th3.innerHTML=tab[i].nomdonator;
            th4.innerHTML=tab[i].montant;
            th5.innerHTML=tab[i].paiement;
            th6.innerHTML=tab[i].etat;
            th7.appendChild(buttun);
            th7.appendChild(buttun2);
            tr.appendChild(th1)
            tr.appendChild(th2)
            tr.appendChild(th3)
            tr.appendChild(th3)
            tr.appendChild(th4)
            tr.appendChild(th5)
            tr.appendChild(th6)
            tr.appendChild(th7)
            parentElement.appendChild(tr)
            
          }
        }
        catch
        {

        }
    }   
    }
  });

  //sup
  function maFonction(event)
  {
  if (event.target.classList.contains('suprimer')) {
    const childElement = event.target;
    td=(childElement.parentNode).parentNode;
   
    
       id=td.cells[0].textContent;
console.log(id)
       td.remove();
       var xhr = getXhr();
       xhr.open("POST", "php/suprimerdon.php", true);
       let data = new FormData();
       data.append("id", id);
       xhr.send(data);
  }
  if (event.target.classList.contains('modifier')) {
    const childElement = event.target;
    td=((childElement.parentNode).parentNode).parentNode;
       idUser=td.cells[0].textContent;
       console.log(td.cells[1].textContent)
     document.getElementById("associationM").value=td.cells[1].textContent;
     document.getElementById("donnateurM").value=td.cells[2].textContent;
     document.getElementById("montantM").value=td.cells[3].textContent;
     document.getElementById("paiementM").value=td.cells[4].textContent;
     document.getElementById("etatM").value=td.cells[5].textContent;

  }
}



//modifier

function modifier(event)
{
console.log(idUser)
event.preventDefault();
association = document.getElementById("associationM").value
donnateur=document.getElementById("donnateurM").value
montant=document.getElementById("montantM").value
paiement=document.getElementById("paiementM").value
etat=document.getElementById("etatM").value

var xhr = getXhr();
     xhr.open("POST", "php/modifierDons.php", true);
     
     let data = new FormData();
     data.append("id", idUser);
     data.append("association",association);
     data.append("donnateur",donnateur);
     data.append("montant",montant);
     data.append("paiement",paiement);
     data.append("etat",etat);
     xhr.send(data);
}
