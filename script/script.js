

    let Username = document.getElementById("Username");
    let password = document.getElementById("password");
    let remember = document.getElementById("remember");
    let submitBtn = document.getElementById("submit");

    

    submitBtn.addEventListener("click", function(event) {
      event.preventDefault();
      let userValue = Username.value.trim();
      let passValue = password.value;

      if(userValue === "" || passValue === ""){
      alert("Please fill all fields");
      return;
    }
    if(userValue === "ekbal" && passValue === "1234"){
      alert("Login Successful!");
    }
    else{
      alert("Invalid Username Or Password");
    }
      console.log(userValue);
    });