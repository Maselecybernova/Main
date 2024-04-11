
/*******************************************************************************

Date And Time

*******************************************************************************/



document.addEventListener("DOMContentLoaded", function() {
  
  var datetimeElement = document.getElementById("dateTime");

  function updateDateTime() {
  
    var now = new Date();

    var dateTimeString = now.toLocaleString();

    datetimeElement.textContent = dateTimeString+" Today";
  }

  updateDateTime();
  setInterval(updateDateTime, 1000);

}); 


//***************************************************************************//


function updateNumber() {
  
        
      var email = document.getElementById("username").value;
      
      if (email=="gmasele15@gmail.com"){
  
          var randomNum = Math.floor(Math.random() * (80 - 50 + 1) + 50);
          var randomNum2 = Math.floor(Math.random() * (10 - 20 + 3) + 30);

          var numberElem = document.getElementById("number");

          numberElem.innerHTML = "Balance: " + "<span style='color: #ffffff; font-weight: bold; font-size: 17px;'> $3" + randomNum +"."+ randomNum2 + "</span> USD";
     }


if (email=="kgakololosupang54@gmail.com"){
  
          var randomNum = Math.floor(Math.random() * (80 - 50 + 1) + 50);

          var numberElem = document.getElementById("number");

          numberElem.innerHTML = "Balance: " + "<span style='color: #ffffff; font-weight: bold; font-size: 17px;'> $234." + randomNum + "</span> USD";
     }



}

setInterval(updateNumber, 1000);

/******************************************************************************/





function charts(){
     window.location.href=("Chart.html");
}
function Dash(){
    window.location.href=("Main.html");
}
function Cashier(){
    window.location.href=("Cashier.html");
}
function Alerts(){
    alert("You do not have any Notifications");
}
function Signals(){
    window.location.href=("Signals.html");
}
function Support(){
    alert("For more information Contact Sdódó Gale Masele[ gmasele15@gmail.com | WhatsApp 72141974 | Discord gmasele_15]");
}






function withdraw(){
    alert("Your account has no Funds");
}
function checkout(){
    alert("Transaction Failed! Please try Again");
}
function continuee(){
    window.location.href=("index.html");
}







