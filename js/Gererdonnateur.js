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
    nom=document.getElementById("nom").value;
    prenom=document.getElementById("prenom").value;
    email=document.getElementById("email").value;
    adresse=document.getElementById("adresse").value;
    tel=document.getElementById("tel").value;
  
    var xhr = getXhr();
    xhr.open("POST", "php/ajouterdonateur.php", true);
    let data = new FormData();
    data.append("nom", nom);
    data.append("prenom", prenom);
    data.append("email", email);
    data.append("adresse",adresse);
    data.append("tel", tel);
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
    xhr.open("POST", "php/chargerDonateur.php", true);
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
            th2.innerHTML=tab[i].Nom;
            th3.innerHTML=tab[i].Prenom;
            th4.innerHTML=tab[i].adresse;
            th5.innerHTML=tab[i].email;
            th6.innerHTML=tab[i].telephone;
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
   console.log(td)
    
       id=td.cells[0].textContent;
       console.log(id)
       td.remove();
       var xhr = getXhr();
       xhr.open("POST", "php/suprimerdonateur.php", true);
       let data = new FormData();
       data.append("id", id);
       xhr.send(data);
  }
  if (event.target.classList.contains('modifier')) {
    const childElement = event.target;
   
    td=((childElement.parentNode).parentNode).parentNode;
    console.log(td)
       idUser=td.cells[0].textContent;
       console.log(td.cells[1].textContent)
     document.getElementById("nomM").value=td.cells[1].textContent;
     document.getElementById("prenomM").value=td.cells[2].textContent;
     document.getElementById("emailM").value=td.cells[3].textContent;
     document.getElementById("adresseM").value=td.cells[4].textContent;
     document.getElementById("telM").value=td.cells[5].textContent;

  }
}
//modifier
function modifier(event)
{  
  console.log(idUser)
  console.log("zertyui")
event.preventDefault();
nom = document.getElementById("nomM").value
prenom = document.getElementById("prenomM").value
adresse = document.getElementById("adresseM").value
email = document.getElementById("emailM").value
tel = document.getElementById("telM").value

console.log(nom)
var xhr = getXhr();
     xhr.open("POST", "php/modifierDNTR.php", true);
     
     let data = new FormData();
     data.append("id", idUser);
     data.append("nom", nom);
     data.append("prenom", prenom);
     data.append("email", email);
     data.append("adresse", adresse);
     data.append("tel",tel);
console.log(data)
     xhr.send(data);
}