//generate random password
function generate(){

    //set password length/complexity
    let complexity = document.getElementById("slider").value;

    //p0ssible password values
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    let password = "";



    //create for loop to choose characters
    for(var i = 0; i < complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }
        

    //add password to textbox
    document.getElementById("display").value = password;

    //add password to previously generated passwords section
    document.getElementById("lastPasswords").innerHTML += password + "<br />";


  }

    // set default lenght display of 25
    document.getElementById("length").innerHTML = "Length 25";

    //function to set length based on slider position.
    document.getElementById("slider").oninput = function(){

  if(document.getElementById("slider").value > 0){
      document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
  }
  else{
      document.getElementById("length").innerHTML = "Length: 1";
  }

}

// Function to copy to clipboard
function copyPassword(){

  document.getElementById("display").select();

  document.execCommand("Copy");
  
  alert("Password copied to clipboard!");

}