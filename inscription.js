console.log("zertyui")
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
  console.log("zertyui")
  function inscription(e)
{
    console.log("sdfghj")
    e.preventDefault();
    nom=document.getElementById("nom").value;
    prenom=document.getElementById("prenom").value;
    adresse=document.getElementById("adresse").value;
    tel=document.getElementById("tel").value;
    email=document.getElementById("email").value;
    password=document.getElementById("motdpasse").value;
    console.log(email);
    console.log(password);
    console.log(adresse);
    var xhr = getXhr();
    xhr.open("POST", "../php/inscription.php", true);
    let data = new FormData();
    data.append("nom", nom);
    data.append("prenom", prenom);
    data.append("email", email);
    data.append("adresse",adresse);
    data.append("tel", tel);
    data.append("password", password);
    data.append("action","send");
    console.log(data);
    xhr.send(data);
}
console.log("333")
document.getElementById("inscription").addEventListener("submit",inscription);
console.log("44")
