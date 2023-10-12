//
var TD;
var idUser;
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
////
document.addEventListener("DOMContentLoaded", function()
 {

  var parentElement = document.getElementById("table")
  
//creation des elements

//recuperation des donnes 
  var xhr = getXhr();
    xhr.open("POST", "php/dons.php", true);
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
          console.log(tab)
          for(var i =0; i<tab.length;i++)
          {
            buttun= document.createElement("button");
            buttun.classList.add("suprimer")
            buttun.style.backgroundColor = "red";
            buttun.innerHTML="suprimer"
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
            th1.innerHTML=tab[i].id;
            th2.innerHTML=tab[i].nomassociation;
            th3.innerHTML=tab[i].montant;
            th4.innerHTML=tab[i].paiement;
            th5.innerHTML=tab[i].etat;
            th6.appendChild(buttun)
            th6.appendChild(buttun2)
            tr.appendChild(th1)
            tr.appendChild(th2)
            tr.appendChild(th3)
            tr.appendChild(th3)
            tr.appendChild(th4)
            tr.appendChild(th5)
            tr.appendChild(th6)
            parentElement.appendChild(tr)
            
          }
        }
        catch
        {

        }
    }   
    }
  });

    

////////////   suprimer 
// table=document.getElementById("table");
// table.addEventListener("click",function(event) {
//   console.log("suu")
  // if(event.target.classList.contains("material-icons"))
  // {
  //   const childElement = event.target;
  //     td=childElement.parentNode;
  //     tr=td.parentNode;
  //   console.log(tr);
  //   th=parentTR.firstElementChild;
  //   id = th.textContent;
  //   console.log(id);
  // }
//});
// const table = document.getElementById('table');
// table.addEventListener('click', (event) => {
//   console.log("fff")
//   if (event.target.classList.contains('modifier')) {
//     const childElement = event.target;
//             tr=(childElement.parentNode).parentNode;
//             v=tr.cells[0].textContent;
//   }})
  function maFonction(event)
  {
  if (event.target.classList.contains('suprimer')) {
    const childElement = event.target;
    td=(childElement.parentNode).parentNode;
   
    
       id=td.cells[0].textContent;

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
     document.getElementById("th1").value=td.cells[1].textContent;
     document.getElementById("th2").value=td.cells[2].textContent;
     document.getElementById("th3").value=td.cells[4].textContent;

  }
 


}
function modifier(event)
{
console.log(idUser)
  event.preventDefault();
  type=document.getElementById("th1").value
  valeur=document.getElementById("th2").value
  paiment=document.getElementById("th3").value
  console.log(paiment)
  var xhr = getXhr();
       xhr.open("POST", "php/modifier.php", true);
       
       let data = new FormData();
       data.append("id", idUser);
       data.append("type",type);
       data.append("valeur",valeur);
       data.append("paiment",paiment);
       xhr.send(data);
}
// function ajouterdon(event)
// {
//   event.preventDefault();
//   valeur=document.getElementById("valeur")
//   paiment=document.getElementById("paiment")
//   type=document.getElementById("type")
//   var xhr = getXhr();
//   xhr.open("POST", "php/ajouterdon.php", true);
  
//   let data = new FormData();
//   data.append("valeur", valeur);
//   data.append("type",type);
//   data.append("paiment",paiment);
//   xhr.send(data);

// }