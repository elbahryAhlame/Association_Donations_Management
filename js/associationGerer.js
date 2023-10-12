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
  //charger donnes
  document.addEventListener("DOMContentLoaded", function()
 {

  var parentElement = document.getElementById("table")
  console.log(parentElement)
  
//creation des elements

//recuperation des donnes 
  var xhr = getXhr();
    xhr.open("POST", "php/chargerAssociation.php", true);
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) 
      {
        console.log(responseText);
        var responseText = xhr.responseText;
    
        // Vérifier si la réponse est du JSON valide
      
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
            
            th1.innerHTML=tab[i].id;
            th2.innerHTML=tab[i].nom;
            th3.innerHTML=tab[i].description;
            
            th4.appendChild(buttun);
            th4.appendChild(buttun2);

            tr.appendChild(th1)
            tr.appendChild(th2)
            tr.appendChild(th3)
            tr.appendChild(th3)
            tr.appendChild(th4)
           
            parentElement.appendChild(tr)
            
          }
       
    }   
    }
  });
  ///////////////ajout 
  function maFonction(event)
  {
  if (event.target.classList.contains('suprimer')) {
    const childElement = event.target;
    td=(childElement.parentNode).parentNode;
   console.log(td)
    
       id=td.cells[0].textContent;
       console.log(id)
       td.remove();
       var xhr = getXhr();
       xhr.open("POST", "php/suprimerassociation.php", true);
       let data = new FormData();
       data.append("id", id);
       xhr.send(data);
  }
  if (event.target.classList.contains('modifier')) {
    const childElement = event.target;
   
    td=((childElement.parentNode).parentNode).parentNode;
    console.log(td)
       idUser=td.cells[0].textContent;
     document.getElementById("nomM").value=td.cells[1].textContent;
     document.getElementById("descriptionM").value=td.cells[2].textContent;
console.log(td.cells[2].textContent)
  }
}

//modifier
function modifier(event)
{
    
console.log(idUser)
event.preventDefault();
nom = document.getElementById("nomM").value
description=document.getElementById("descriptionM").value

console.log(nom)
console.log(description)
var xhr = getXhr();
     xhr.open("POST", "php/modifierAS.php", true);
     
     let data = new FormData();
     data.append("id", idUser);
     data.append("nom", nom);
     data.append("description",description);
console.log(data)
     xhr.send(data);
}
//ajout

function ajouter(e) 
  {
   console.log("zertyu")
    e.preventDefault();
    nom=document.getElementById("nom").value;
    description=document.getElementById("description").value;
   
  
    var xhr = getXhr();
    xhr.open("POST", "php/ajouterAS.php", true);
    let data = new FormData();
    data.append("nom", nom);
    data.append("description", description);
    console.log(nom)
    console.log(description)
    console.log(nom)
    xhr.send(data);
}
document.getElementById('ajouterassociation').addEventListener('submit', ajouter);