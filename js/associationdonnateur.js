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

  var parentElement = document.getElementById("ensembleAS")
  
//creation des elements

//recuperation des donnes 
  var xhr = getXhr();
    xhr.open("POST", "php/association.php", true);
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
            div1= document.createElement("div");
            div1.className = "box b-1";
            div2= document.createElement("div");
            div2.className = "top-box";
            h=document.createElement("h5");
            div3= document.createElement("div");
            div3.className = "bottom-box";
            p=document.createElement("p");
            h.innerHTML =tab[i].nom;
            p.innerHTML =tab[i].description ;
            div2.appendChild(h);
            div3.appendChild(p);
            div1.appendChild(div2)
            div1.appendChild(div3)
            parentElement.appendChild(div1)
            
          }
        }
        catch
        {}
    }   
    }
  });